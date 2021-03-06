const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const bcrypt = require("bcrypt");

const indexRouter = require("./routes/router");
const User = require("./models").User;

const app = express();

app.use(
  session({ resave: false, saveUninitialized: false, secret: "passport test" })
);
app.use(passport.initialize());
app.use(passport.session());
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "username",
//       passwordField: "password",
//       passReqToCallback: true,
//       session: false,
//     },
//     (req, username, password, done) => {
//       process.nextTick(() => {
//         if (username === "test" && password === "test") {
//           return done(null, username);
//         } else {
//           console.log("login error");
//           return done(null, false, { message: "not found" });
//         }
//       });
//     }
//   )
// );

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
      session: false,
    },
    (req, email, password, done) => {
      User.findOne({
        where: {
          email: email,
        },
      })
        .then((user) => {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          }
          throw new Error();
        })
        .catch((error) => {
          return done(null, false);
        });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
