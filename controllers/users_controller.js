const User = require('../models/user');

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
    console.log("Inside create method")
    console.log(req.body);
    if (req.body.password != req.body.confirm_password){
        return res.rediret('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log("Error in finding user in signing up");
            return;
        }

        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('Error in creating user while signing up');
                    return res.redirect('/users/sign-in');
                }
            });
        }
        else{
            return res.rediret('back');
        }
    });
};

// sign in and create the session
module.exports.createSession = function(req, res){
    // TODO
};