import express from 'express';
import { readData, writeData } from '../utils/dataHandler.js';
import { basicValidation } from '../middleware/validator.js';

const router = express.Router();

/* 
   STEP 4: Implement your CRUD logic below.
   Replace 'resource1' with the key defined in dataHandler.js.
*/

// GET - Retrieve all items
router.get('/', async (req, res) => {
    const items = await readData('resource1');
    res.json(items);
});

// POST - Add a new item (Protected by validation)
router.post('/', basicValidation, async (req, res) => {
    const items = await readData('resource1');

    // CHANGE THIS: Define your object structure here
    const newItem = { 
        id: Date.now(), 
        ...req.body 
    };

    items.push(newItem);
    await writeData('resource1', items);

    res.status(201).json(newItem);
});

// PUT - Update an item
router.put('/:id', basicValidation, async (req, res) => {
    const { id } = req.params;
    // CHANGE THIS: Add update logic here
    res.json({ message: "Update logic goes here for ID: " + id });
});

// DELETE - Remove an item
router.delete('/:id', basicValidation, async (req, res) => {
    const { id } = req.params;
    // CHANGE THIS: Add delete logic here
    res.json({ message: "Delete logic goes here for ID: " + id });
});

export default router;
