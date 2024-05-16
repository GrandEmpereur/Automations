// // Dans le fichier de test pour l'exercice 1 (hotels.test.ts)
// import { beforeEach, describe, it, expect, afterEach } from 'vitest';
// import { Server, createServer } from 'http';
// import request from 'supertest';
// import { createApp } from '../server';
// import getPort from 'get-port';

// let server: Server;
// let serverAddress: string;

// beforeEach(async () => {
//     const app = await createApp();
//     const port = await getPort();
//     server = createServer(app.callback()).listen(port);
//     serverAddress = `http://localhost:${port}`;
// });

// describe('GET /hotel', () => {
//     it('should return a list of hotels with status 200', async () => {
//         const response = await request(server)
//             .get('/hotel')
//             .expect(200)
//             .expect('Content-Type', /json/);

//         expect(response.body).toEqual({
//             hotel1: "aaaaaaaaaaa",
//             hotel2: "bbbbbbbbb",
//             hotel3: "ccccccccccc"
//         });
//     });

//     it('should return error when no hotels are available', async () => {
//         const response = await request(serverAddress)
//             .get('/hotel')
//             .expect(404);

//         expect(response.body).toEqual({
//             message: "Aucun hôtels disponible"
//         });
//     });
// });

// describe('GET /bookings', () => {
//     it('should return a list of booked hotels with status 200', async () => {
//         const response = await request(serverAddress)
//             .get('/hotel/bookings')
//             .expect(200)
//             .expect('Content-Type', /json/);

//         expect(response.body).toEqual({
//             "hotel3": [
//                 {
//                     "name": "cccccccccccccccccccc",
//                     "pictures": {
//                         "photo1": "HHHHHHHHHHHH.png",
//                         "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
//                     },
//                     "book": "true"
//                 }
//             ],
//         });
//     });

//     it('should return error when user has no bookings', async () => {
//         const response = await request(serverAddress)
//             .get('/hotel/bookings')
//             .expect(404);

//         expect(response.body).toEqual({
//             message: "Vous n'avez fait aucune réservation"
//         });
//     });
// });

// describe('GET /pictures', () => {
//     it('should return pictures for a specific hotel with status 200', async () => {
//         const response = await request(server)
//             .get('/hotel/pictures/hotel1')
//             .expect(200)
//             .expect('Content-Type', /json/);

//         expect(response.body).toEqual([
//             {
//                 "name": "aaaaaaaaaaa",
//                 "pictures": {
//                     "photo1": "EEEEEEEEEEE.png",
//                     "photo2": "DDDDDDDDDDD.png"
//                 }
//             }
//         ]);
//     });

//     it('should return error when a hotel has no pictures', async () => {
//         // This assumes there is logic to detect missing pictures in hotels
//         const response = await request(serverAddress)
//             .get('/hotel/pictures')
//             .expect(404);

//         expect(response.body).toEqual({
//             message: "L'un des hôtels n'a aucune photo pour le moment"
//         });
//     });
// });

// describe('GET /reservation', () => {
//     it('should return a list of reservation with status 200', async () => {
//         const response = await request(server)
//             .get('/hotel/reservations')
//             .expect(200)
//             .expect('Content-Type', /json/);

//         expect(response.body).toEqual({
//             "reservation1": "aaaaaaaaaaa",
//             "reservation2": "bbbbbbbbb",
//             "reservation3": "ccccccccccc"
//         });
//     });

//     it('should return error when no hotels are available', async () => {
//         const response = await request(serverAddress)
//             .get('/hotel/reservation')
//             .expect(404);

//         expect(response.body).toEqual({
//             message: "Aucun hôtels disponible"
//         });
//     });
// });

// afterEach(() => {
//     server.close();
// });
