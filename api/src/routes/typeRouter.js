const { Router } =  require('express');

const { 
    createType, getAllTypes 
} = require('../controller/typeController.js');

const typeRouter = Router();

const getTypesHandler = async (req, res) => {
    try {
        const types = await getAllTypes();
        res.status(200).send(types);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

typeRouter.get('/', getTypesHandler);

module.exports = typeRouter;