const User = require('../models/user');

module.exports.profile = function(req, res){
    console.log("Profile Page");
    if(!req.cookies.user_id){
        return res.redirect('/users/sign-in');
    }

    User.findOne({_id: req.cookies.user_id}, function(err, user){
        if(err){
            console.log("Error in finding the user in signing in");
            return;
        }
        if(user){
            return res.render('user_profile',{
                title: 'User Profile',
                user: user
            }); 
        }
        else{
            console.log("User not found");
            return res.redirect('back');
        }
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
    console.log(req.body);
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
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
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }
        else{
            return res.redirect('back');
        }
    });
};

// sign in and create the session
module.exports.createSession = function(req, res){
    // STEPS TO AUTHENTICATE
    // Find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log("Error in finding the user in signing in");
            return;
        }
        // Handle user found
        if(user){
            // Handle password which don't match
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            // Handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        }
        else{
            // Handle user not found
            return res.redirect('back');
        }
    });
};

// sign out functionality
module.exports.signOut = function(req, res){
    res.clearCookie('user_id');
    return res.redirect('/users/sign-in');
};