const express = require('express');
const app = express();

app.use(express.static('./public'));

app.listen(2333, '115.28.45.165');
