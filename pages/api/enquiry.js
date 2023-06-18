import { MongoClient } from 'mongodb';
require('dotenv').config();

console.log(process.env.DATABASE_URI);
const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, address, phone, email, details } = req.body;

      const db = client.db();
      const collection = db.collection('Enquiries');

      const result = await collection.insertOne({
        name,
        address,
        phone,
        email,
        details,
        date: new Date(),
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
