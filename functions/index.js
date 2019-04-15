const functions = require('firebase-functions'),
    express = require('express'),
    app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

exports.app = functions.https.onRequest(app);
