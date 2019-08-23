import express from 'express';
import path from 'path';

// Express App
const app = express();

// Host Configuration
const PORT = 3000;
const HOST = '0.0.0.0';

// Environment
const ENV = process.argv.find((arg) => arg.includes('dist')) ? 'production' : 'development';
const BASE_PATH = (ENV === 'production' ? __dirname + '/../' : __dirname + '/../dist');

// Routing
app.get('/', (_req: any, res: any) => {
    res.sendFile(path.resolve(BASE_PATH + '/client/index.html'));
});

// Static Files
app.use(express.static(path.resolve(BASE_PATH + '/client')));

// Start the Server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);