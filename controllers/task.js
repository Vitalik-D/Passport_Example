const User = require("../models/task.js");

exports.addUser = function (request, response){
    response.render("create.hbs");
};
exports.getUser = function(request, response){

    User.find({}, function(err, allUser){

        if(err) {
            console.log(err);
            return response.render("error.hbs");
        }
        response.render("user.hbs", {
            user: allUser
        });
    });
};
exports.postUser= function(request, response){
    if(!request.body) return response.render("error.hbs");
    const userName = request.body.name;
    const userAge = request.body.age;
    const user = new User({name: userName, age: userAge});

    user.save(function(err){
        if(err) return console.log(err);
        response.redirect("/user");
    });
};
