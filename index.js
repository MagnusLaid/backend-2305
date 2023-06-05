    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('Simple API homepage');
    });

    app.listen(5070, () => {
        console.log("Server running on port 5070");
    });

