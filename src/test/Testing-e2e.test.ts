import { describe, it, expect } from 'vitest';
import axios from 'axios';

describe('End-to-End Test', () => {
    it('should call /calldependance and return the correct message', async () => {
        const response = await axios.get('http://localhost:3001/calldependance?name=World').catch((err) => err.response);
        expect(response.data).toBe('Hello, World!');
    });
});
