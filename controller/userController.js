import routes from "../routes";
import User from "../models/User";
import passport from "passport";


export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Jn"});
}



export const postJoin = async (req, res) =>{
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else {
        try {
        const user = await User({
            name,
            email
        });
        await User.register(user, password);
        next();
    } catch (error) {
        console.log(error)
    }  
        res.redirect(routes.home);
    }
        res.render("join", { pageTitle: "zz"});
}



export const getLogin = (req, res) => { 
    res.render("login");
}
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
})


export const logout = (req, res) => {
    res.redirect(reoutes.home);
}


export const users = (req, res) => res.render("Users");

export const userDetail = (req, res) => 
res.render("userDetail");

export const editProfile = (req, res) => 
res.render("editProfile", {pageTitle: "Edit Profile"});

export const changePassword = (req, res) => res.render("Change Password");