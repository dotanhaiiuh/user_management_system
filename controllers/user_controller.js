var User = require("../models/user_model");

module.exports.index = function(request, response){
    User.find().exec((error, elements) => {
        response.render("index", {
            title: "Everyone",
            users: elements
        });
    });
};

module.exports.search = function (request, response) {
    var username = request.query.username;

    User.find({name: username}).exec((error, elements) => {
        response.render("index", {
            title: "Everyone",
            users: elements
        });
    });
}

module.exports.view = function (request, response) {
    var userId = parseInt(request.params.id);

    User.findOne({id: userId}).exec((error, element) => {
        response.render("user", {
            user: element
        });
    });
};

module.exports.create_get = function (request, response) {
    var errors = [];

    response.render("create", {
        errors: errors,
        values: request.body
    });
};

module.exports.create_post = function (request, response) {
    User.find().exec((error, elements) => {
        var user = {
            id: elements.length + 1,
            name: request.body.username,
            age: parseInt(request.body.age)
        }

        User.create(user);
        response.redirect("/users");
    });
};

module.exports.update_get = function (request, response) {
    var userId = parseInt(request.params.id);

    User.findOne({id: userId}).exec((error, element) => {
        var errors = [];
        
        response.render("update", {
            errors: errors,
            values: element
        });
    });
};

module.exports.update_post = function (request, response) {
    var userId = parseInt(request.params.id);

    var user = {
        id: userId,
        name: request.body.username,
        age: parseInt(request.body.age)
    }

    User.updateOne({id: userId}, user).exec((error, result) => {
        response.redirect("/users");
    });
};

module.exports.delete = function (request, response) {
    var userId = parseInt(request.params.id);

    User.deleteOne({id: userId}).exec((error, result) => {
        response.redirect("/users");
    });
};