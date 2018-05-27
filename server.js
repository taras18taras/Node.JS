var User= require('./user');

var vasya = new User.User("Vasia");
var Petro = new User.User("Petro");

vasya.hello(Petro);

