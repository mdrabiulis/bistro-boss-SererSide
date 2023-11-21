const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const app = express()
 require('dotenv').config()
const cors = require('cors');
const prot = process.env.PORT || 5000;


// middleware
app.use(cors())
app.use(express.json())





const uri = `mongodb+srv://${process.env.BISTRO_USER}:${process.env.BISTRO_PASS}@cluster0.ltbxnxt.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const menuCollection = client.db("bistro-boss-sererside").collection("bistro-boss-menu");


app.get('/menu', async (req, res) =>{
    const result =await menuCollection.find().toArray();
    res.send(result)
    // console.log(result);
})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('boss is cameing....')
})

app.listen(prot, () => {
    console.log(`Bistro boss is sitting on prot ${prot}`)
})