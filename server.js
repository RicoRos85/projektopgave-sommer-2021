const express = require('express');
const app     = express();
const bcrypt  = require('bcrypt');

app.use(express.json());

const users = [
    { name: 'Rico', password: '123456', createdAt: Date() }, 
    {name: 'Ole', password: '765432', createdAt: Date()}
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // console.log(salt);
        console.log("Viewing hashedPassword: " + hashedPassword);
        const user = { 
            name: req.body.name, 
            password: hashedPassword, 
            createdAt: req.body.createdAt 
        }
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
})


app.post('/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name);
    if(user == null) {
        return res.status(400).send('Cannot find user');
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Det virker!!!');
        } else {
            res.send('Ingen adgang')
        }
    } catch {
        res.status(500).send();
    }
});


app.listen(3000);