const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use("/api/users", require('./routes/user-routes'));
app.use("/api/posts", require('./routes/post-routes'));
app.use("/api/profiles", require('./routes/profile-routes'));

db.sequelize.sync().then(()=>{
    console.log('connected to db');
    app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))
});