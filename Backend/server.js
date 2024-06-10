const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());
app.use(cors());

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL database'))
    .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync();


app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
