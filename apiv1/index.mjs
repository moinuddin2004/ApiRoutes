import express from 'express';
const router = express();

router.get('/login', (req, res) => {
    console.log('this is login!', new Date());
    res.send('this is login v1' + new Date());
})


router.get('/signup', (req, res) => {
    console.log('this is signup!', new Date());
    res.send('this is signup' + new Date());
})

export default router