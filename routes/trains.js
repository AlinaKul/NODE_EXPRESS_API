import express from 'express';



import { createTrain, getTrains, getTrain, deleteTrain, updateTrain  } from '../controllers/trains.js';

const router = express.Router();


router.get('/', getTrains); // all routes in here are starting with /trains

router.post('/', createTrain);

router.get('/:id', getTrain); // /trains/2 (train id = 2) => req.params {id:2} (reikia issaugoti parametra, )

router.delete('/:id', deleteTrain);

router.patch('/:id', updateTrain);

export default router;