const nodeHtmlToImage = require('node-html-to-image');
const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {

    try {
        const result = await nodeHtmlToImage({
            output: './image/image.png',
            html: '<html><body>Hello {{name}}!</body></html>',
            puppeteerArgs: {args: ['--no-sandbox']},
            content: {name: 'you'}
        });

        res.json('successfully created image');
    } catch (e) {
        res.json(e);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


