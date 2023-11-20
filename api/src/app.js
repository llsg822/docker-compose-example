const app = require('express')();
const os = require('os');

app.get('/', (req, res) => {
    const data = {
        "message": "ok"
    }
    res.setHeader('x-server', os.hostname());
    return res.json(data);
});

app.listen(3000, () => {
    console.log('api server listen');
});