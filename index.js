import express from 'express';
import bodyParser from 'body-parser';

import trainsRoutes from './routes/trains.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/trains', trainsRoutes);

app.get('/', (req, res) => {
	console.log('[TEST]!');

	res.send('Hello from Homepage.');
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
