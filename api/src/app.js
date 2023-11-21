const app = require('express')();
const os = require('os');
const uuid = require('uuid');
const path = require('path');

const multer = require('multer')();

const aws = require('aws-sdk');
const s3 = new aws.S3({
    accessKeyId: 'minio',
    secretAccessKey: 'minio123',
    endpoint: 'http://minio:9000',
    s3ForcePathStyle: true,
});

app.get('/', (req, res) => {
    const data = {
        "message": "ok"
    }
    res.setHeader('x-server', os.hostname());
    return res.json(data);
});

app.post('/upload', multer.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ "message": "no file" });
    }
    s3.upload({
        Bucket: 'test',
        Key: `${uuid.v4()}${path.extname(req.file.originalname)}`,
        Body: req.file.buffer,
    }, (err, data) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).json({
            "location": data.Location
        })
    })
});

app.listen(3000, () => {
    console.log('api server listen');
});