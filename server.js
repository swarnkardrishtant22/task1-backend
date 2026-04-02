const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const FILE = './data.json';

const readData = () => {
    try {
        return JSON.parse(fs.readFileSync(FILE));
    } catch {
        return [];
    }
};

const writeData = (data) => {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};

app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/items', (req, res) => {
    const data = readData();
    res.json(data);
});

app.post('/items', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const data = readData();

    const newItem = {
        id: Date.now().toString(),
        title,
        description,
        createdAt: new Date()
    };

    data.push(newItem);
    writeData(data);

    res.status(201).json(newItem);
});

app.delete('/items/:id', (req, res) => {
    const data = readData();
    const newData = data.filter(item => item.id !== req.params.id);

    if (data.length === newData.length) {
        return res.status(404).json({ error: 'Item not found' });
    }

    writeData(newData);
    res.json({ message: 'Deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});