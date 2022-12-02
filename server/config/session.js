const session = require('express-session');

const loginSession = session({
    key: "login",
    secret: "chunha",
    resave: false,
    saveUninitialized: true,
    cookie: { expires: 1000 * 60 * 60 * 24, }
});

module.exports = loginSession;