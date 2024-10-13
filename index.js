const express = require('express');
const app = express();

const items = require('./items');
console.log(items)

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/api/items', (req,res)=> {
    res.json(items)
});

app.post('/api/items', (req,res) => {
    const newItem = {
        name: req.body.name,
        id: req.body.id,
        price: req.body.price
    }
    items.push(newItem);
    res.json(items)
});

app.delete('/api/items/:id', (req, res)=> {
    let { id } = req.params;
    let idToBeDeleted = items.find(item => item.id === id);

    if(idToBeDeleted){
        res.json({
            message: "Item removed",
            items: items.filter(item => item.id !== id)
        })
    } else {
        res.status(404).json({message: `item is not found`})
    }
});

app.put('/api/items/:name', (req, res)=> {
    let { name } = req.params;
    let itemToBeUpdated = items.find(item => item.name === name);

    if(itemToBeUpdated){
        const newName = req.body;

        items.forEach(item => {
            if(item.name === req.params.name){
                item.name = newName ? newName.name : item.name;
                res.json({message: `Item description has been updated`, item})
            } else {
                res.status(404).json({message: `Item ${req.params.name} can't be found`})
            }
        })
    }
})


app.listen(4000, ()=> {
    console.log(`Hi it's working on port 4000`)
})