module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title: 'User Profile'
    }); 
}

// render sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    });
};

// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    });
};

// get the sign up date
module.exports.create = function(req, res){
    // TODO
};

// sign in and create the session
module.exports.createSession = function(req, res){
    // TODO
};