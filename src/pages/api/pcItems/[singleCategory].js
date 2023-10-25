import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://PCMASTER:5wJSaZdD7FgzF6YL@cluster0.7mwsjuk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

export default async function PcBuilder(req, res) {
  try {
    await client.connect(uri);
    // console.log("Connected to MongoDB");

    const PcItemsCollection = client.db("PCMASTER").collection("PCITEMS");

    if (req.method === "GET") {
      const singleCategory = req.query._id;
      const objectId = new ObjectId(singleCategory);

      const data = await PcItemsCollection.findOne(objectId);
      res.status(200).json({
        message: "Success",
        data: data,
      });
    }
  } catch (error) {
    // console.log(error); // Log the error
    res.status(500).json({ message: "Internal Server Error", statusCode: 500 });
  }
}
