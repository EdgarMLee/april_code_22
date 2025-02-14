// Task 1a
const express = require('express');
const app = express();

// Task 4a
app.use(express.json())

// Task 2a
app.get('/home', (req, res) => {
    // Task 2b
    res.send('Welcome Home')
})

let boardgames = [ //name, max_players, category, avg_rating
    { name: 'Gloomhaven', max_players: 4, category: 'Adventure', avg_rating: 8.8 },
    { name: 'Pandemic Legacy: Season 1', max_players: 4, category: 'Cooperative', avg_rating: 8.62 },
    { name: 'Brass: Birmingham', max_players: 4, category: 'Economic', avg_rating: 8.66 },
    { name: 'Terraforming Mars', max_players: 5, category: 'Economic', avg_rating: 8.43 },
    { name: 'Twilight Imperium: Fourth Edition', max_players: 6, category: 'Strategy', avg_rating: 8.7 },
    { name: 'Spirit Island', max_players: 4, category: 'Cooperative', avg_rating: 8.34 },
    { name: 'Mage Knight', max_players: 4, category: 'Adventure', avg_rating: 8.1 },
    { name: 'Rising Sun', max_players: 5, category: 'Strategy', avg_rating: 7.88 }
]

let reviews = [];

// Task 3
app.get(['/boardgames', '/games'], (req, res) => {
    let names = [];
    for (let i = 0; i < boardgames.length; i++) {
        // const game = boardgames[i];
        names.push(boardgames[i].name)
    }
    res.json({names})
})

// Task 5a
app.get('/boardgames/total', (req, res) => {
    res.send(`${boardgames.length}`)
})

app.post('/boardgames', (req, res) => {
    boardgames.push(req.body)
    res.status(201)
    res.contentType('application/json')
    res.json(boardgames)
})
// Task 6
app.get('/boardgames/category', (req, res) => {
    console.log(req.query)
    const category = req.query.category
    let games = []
    for (let i = 0; i < boardgames.length; i++) {
        const game = boardgames[i];
        if (game.category === category) {
            games.push(game.name)
        }
    }
    res.json({ games })
})

// Task 5b
app.get('/boardgames/:index', (req, res) => {
    console.log(req.params.index)
    res.send(boardgames[req.params.index].name)
})

// Task 4
app.post('/reviews', (req, res) => {
    console.log(req.body)
    reviews.push(req.body)
    res.json({message: "Success", reviews})
})


// Task 1b
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))
