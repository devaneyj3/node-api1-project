const express = require('express');
const shortid = require('shortid');
const cors = require('cors');

const server = express();

server.use(express.json());

server.use(cors());

let users = [];

server.get('/', (req, res) => {
    res.send('The backend is working. HOORAY');
})

server.post('/api/users', (req, res) => {
   
    const data = req.body;
    console.log(req.body)
    if (req.body.name === '' || req.body.bio === '') {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else if (req.body.name !== '' && req.body.bio !== '') {
        data.id = shortid.generate();

        users.push(data);

        res.status(201).json(data)
        console.log(`You submitted ${data.id}`);

    }
    else (
        res.status(500).json({ errorMessage: "The users information could not be retrieved." })
    )
}) 

server.get("/api/users", (req, res) => {
    if (users) {
        res.status(200).json(users);
    } else (
        res.status(500).json({ errorMessage: "The users information could not be retrieved." })
    )
})

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    if (foundUser) {
        console.log(foundUser)
    
        res.status(200).json(foundUser)
        
    } else if (!foundUser) {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        res.status(500).json({ errorMessage: "The user information could not be retrieved." })
    }

})
 
server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    let foundUser = users.find(user => user.id === id);
    if (foundUser) {
        users = users.filter(user => user !== foundUser)
    
        console.log('You want to delete ', foundUser)
    
        res.status(200).json(users)
    } else if (!foundUser) {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        res.send(500).json({ errorMessage: "The user could not be removed." })
    }
})

server.patch('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    let foundUser = users.find(user => user.id === id);

    if (foundUser) {
        Object.assign(foundUser, changes)
        console.log('You want to update ', foundUser.name)
        res.status(200).json(foundUser);
    } else if(!foundUser) {
        res.status(404).json({ errorMessage: "The user with the specified ID does not exist."})
    } else if (req.body.name === '' || req.body.bio === '') {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        res.status(500).json({ errorMessage: "The user information could not be modified." })
    }

})

server.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
})