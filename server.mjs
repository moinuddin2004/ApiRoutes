import express from 'express';
import path from 'path';
import apiv1Router from './apiv1/index.mjs'
const __dirname = path.resolve();
const app = express();


app.use('/api/v1', apiv1Router)

app.use('/', (req, res) => {
    console.log('Welcome to my server', new Date());
    res.send('Welcome to my server' + new Date());
})



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})
