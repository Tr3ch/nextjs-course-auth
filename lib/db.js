import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://tr3ch:aTWduO9d2ulcIv0u@cluster0.etr95.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}

