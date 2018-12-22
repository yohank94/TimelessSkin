const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mysql = require("mysql");
const keys = require("../config/keys");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: keys.mysqlPass,
  database: "timelessSkin"
});

module.exports = passport => {
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    connection.query("SELECT * FROM users WHERE id = " + id, (err, rows) => {
      cb(err, rows);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "http://localhost:5000/auth/google/callback"
      },
      async (accessToken, refreshToken, profile, cb) => {
        const emailAddress = profile.emails[0].value;
        try {
          await connection.query(
            `SELECT * FROM users where email = ?;`,
            [emailAddress],
            async (err, rows) => {
              if (err) return cb(err);
              let thisUser = rows[0];
              if (!thisUser) {
                await connection.query(
                  `INSERT INTO users (email, firstname, lastname) VALUES (?, ?, ?);`,
                  [
                    emailAddress,
                    profile.name.givenName,
                    profile.name.familyName
                  ],
                  (err, rows) => {
                    if (err) return cb(err);
                    thisUser = rows[0];
                  }
                );
              }
              return cb(null, thisUser);
            }
          );
        } catch (err) {
          alert(err);
        }
      }
    )
  );
};
