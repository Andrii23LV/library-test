import express from 'express';
import { fileURLToPath } from 'url';
import cors from 'cors';
import path from 'path';

import router from './routes/book.routes.js';

const PORT = 2000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'uploads');

const app = express();

app.use(express.static(dir));

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);

app.use(express.json());
app.use('/api', router)

app.listen(PORT, () => console.log(`Serving on port: ${PORT}`));