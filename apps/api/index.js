import express from 'express';
const app = express();
app.get('/api/hello', (req,res)=>res.json({ ok:true, msg:'Hello Bootcamp!' }));
app.listen(3000, ()=>console.log('API on :3000'));