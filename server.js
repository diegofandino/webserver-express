const express = require('express');
const app = express();
// Uso de parciales para replicar headers, footers o html en varios lugares
const hbs = require('hbs');

const port = process.env.PORT || 3000;


//middleware para el index.html
app.use(express.static(__dirname + '/public'));

//uso de HBS en node
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers HBS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})


app.get('/', (req, res) => {

    // let salida = {
    //     nombre: 'Juan D',
    //     edad: 23,
    //     url: req.url
    // };

    //res.send('Hello World');
    res.render('home', { nombre: 'Diego' });
});

app.get('/about', (req, res) => {

    res.render('about');
});

// app.get('/data', (req, res) => {

//     res.send('Hello Data');

// });

app.listen(port, () => { console.log(`Escuchando peticiones en puerto ${port}`); });