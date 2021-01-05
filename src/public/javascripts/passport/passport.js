const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../../../models").User;

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
}, (email, password, done) => {
    User.findOne({
        where: {
            email: email
        }
    })
    .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
        }
        throw new Error();
    })
    .catch(() => {
        return done(null, false);
    });
}));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;