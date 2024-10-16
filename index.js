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

app.put('/api/items/:name', (req, res)=> {
    let { name } = req.params;
    let itemToBeUpdated = items.find(item => item.name === name);

    if(itemToBeUpdated){
        // const newName = {
        //     name: req.body.name,
        //     id: req.body.id,
        //     price: req.body.price
        // }
        const newName = req.body;

        items.forEach(item => {
            if(item.name === req.params.name){
                item.name = newName ? newName.name : item.name;
                item.id = newName ? newName.id : item.id;
                item.price = newName ? newName.price : item.price;
                res.json({message: `Item description has been updated`, item})
            } 
        })
    } else {
        res.status(404).json({message: `Item ${req.params.name} can't be found`})
    }
})

app.listen(4000, ()=> {
    console.log(`Hi it's working on port 4000`)
})