const nodeHtmlToImage = require('node-html-to-image');
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    nodeHtmlToImage({
        output: './image.png',
        html: '<html><body>Hello {{name}}!</body></html>',
        content: {name: 'you'}
    }).then(() => console.log('The image was created successfully!'));
    res.json('The image was created successfully!\'');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


