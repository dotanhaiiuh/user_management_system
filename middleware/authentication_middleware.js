var db = require("../database");

module.exports.requireAuthentication = function(request, response, next){
    var userId = parseInt(request.cookies.userId);
    if (userId == null) {
        response.redirect("/");
        return;
    }

    var user = db.get("users").find({id: userId}).value();
    if (user == null) {
        response.redirect("/");
        return;
    }

    response.locals.user = user;

    next();
}