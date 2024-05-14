import * as dotenv from "dotenv";
import Koa from "koa";
import path from "path";
import cors from "@koa/cors";
import hotel from "./routes/hotel";

// Load environment variables from .env.development or .env
dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV === "development" ? '.env.development' : '.env'),
});

/**
 * Main entry point of the application.
 * Initializes the Koa application and starts the server.
 */
async function main(): Promise<void> {
    const app = await createApp();
    const port = process.env.PORT || 4201;
    console.log(`Server listening on port http://localhost:${port}`);
    app.listen(port);
}

/**
 * Initializes and configures the Koa application.
 * @returns The initialized Koa application.
 */
export async function createApp(): Promise<Koa> {
    const app = new Koa();

    /**
     * Middleware that attaches the Shopify client to each request.
     */
    app.use((ctx, next) => {
        return next();
    });

    // Enable CORS
    app.use(cors());

    app.use(hotel.routes());

    /**
     * Global error handling middleware.
     */
    app.on('error', (err, ctx) => {
        console.error('server error', err);
        ctx.status = 500;
        ctx.body = {
            "status": 500,
            "message": "Internal server error",
            "error": err.message || " "
        };
    });

    return app;
}

main();
