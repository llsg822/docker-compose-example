const app = require('express')();

app.get('/', (req, res) => {
    const data = {
        "message": "ok"
    }
    return res.json(data);
});

app.listen(3000, () => {
    console.log('api server listen');
});