import { v4 as uuidv4 } from 'uuid';
let trains = [];

export const getTrains = (req, res) => {
	res.send(trains);

}

export const createTrain = (req, res) => {
	const train = req.body;

	// const trainId = uuidv4(); random train ID, delete the const, that will not to repeat

	// const trainWithId = { ...train, id: uuidv4() } add random train ID to train object, delete const - do not repeat

	trains.push({ id: uuidv4(), ...train });

	res.send(`Train with the ${train.id} added to the database`);
}

export const getTrain = (req, res) => {
	const { id } = req.params;
	const foundTrain = trains.find((train) => train.id == id) // we get each train and searching for if the train,that id is equal the id );

	res.send(foundTrain);
}

export const deleteTrain = (req, res) => {  //delete specified train by id, (req, res) - callback function
	const { id } = req.params;

	trains = trains.filter((train) => train.id !== id); //filter out trains array, we get each train, keep all the trains except the one with that id

	res.send(`Train with the id ${id} deleted from the database.`);
}

export const updateTrain = (req, res) => { //update exact train
	const { id } = req.params;
	const { model, yearOfManufacturing, lastMaintenanceDate, isActive } = req.body; //then we take all the thing coming from the requested body

	const train = trains.find((train) => train.id == id); // we are receiving request parameter - id, that id specifies which user we want to update (we use find method)

	if (model) train.model = model;				 // if we have the values which we want to replace, then we change
	if (yearOfManufacturing) train.yearOfManufacturing = yearOfManufacturing;
	if (lastMaintenanceDate) train.lastMaintenanceDate = lastMaintenanceDate;
	if (isActive) train.isActive = isActive;

	res.send(`Train with the id ${id} has been updated`);
}