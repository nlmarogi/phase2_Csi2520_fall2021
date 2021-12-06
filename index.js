const { request, response } = require("express")
const express = require("express")
const app = express()
const PORT= process.env.PORT || 3000;


app.use(express.static("public"))
app.use('/css',express.static(__dirname + "public/css"))
app.use('/js',express.static(__dirname + "public/js"))
app.use('/images',express.static(__dirname + "public/images"))



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('views', './views')
app.set('view engine', 'ejs')






app.get('/', (request, response) =>{
    response.render('index')
})

app.get('/page1/:x', function(request, response){
    response.render('landing page.ejs')
});

app.get('/page2/:y', function(request, response){
    response.render('Fridaythe13th.ejs')
});

app.get('/page3/:z', function(request, response){
    response.render('Halloween.ejs')
});

app.get('/page4/:a', function(request, response){
    response.render('Scream.ejs')
});

app.get('/page5/:b', function(request, response){
    response.render('A nightmare on elm street.ejs')
});

app.get('/page6/:c', function(request, response){
    response.render('Psycho.ejs')
});

app.get('/page7/:d', function(request, response){
    response.render('Alien.ejs')
});

app.get('/page8/:e', function(request, response){
    response.render('Predator.ejs')
});

app.get('/page9/:f', function(request, response){
    response.render('The Thing.ejs')
});

app.get('/page10/:g', function(request, response){
    response.render('The Fly.ejs')
});

app.get('/page11/:h', function(request, response){
    response.render('Jaws.ejs')
});

app.get('/page12/:i', function(request, response){
    response.render('Prophecey.ejs')
});

app.get('/page13/:j', function(request, response){
    response.render('The Omen.ejs')
});

app.get('/page14/:k', function(request, response){
    response.render('The Exorcist.ejs')
});

app.get('/page15/:l', function(request, response){
    response.render('Frankensien.ejs')
});

app.get('/page16/:m', function(request, response){
    response.render('The Invisible Man.ejs')
});

app.get('/page17/:n', function(request, response){
    response.render('Dawn of the Dead.ejs')
});

app.get('/page18/:m', function(request, response){
    response.render('Dead Alive.ejs')
});

app.get('/page19/:m', function(request, response){
    response.render('Create account.ejs')
});

app.get('/page20/:m', function(request, response){
    response.render('delete account.ejs')
});





app.get('/handler', function (req, res) {
    const username = req.query.user_name;
    const password = req.query.user_password;
    res.send("Username: " + username +"   Password:" + password);
  });

  app.get('/delete', function (req, res) {
    res.send("Account deleted from the database");
  });


app.listen(PORT, () =>console.info('listening on port ${port}') ) 