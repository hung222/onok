const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kuyu:<mnbvcxzasd>@cluster0.2jbn4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("kuyu").collection("devices");
  // perform actions on the collection object
  client.close();
});
