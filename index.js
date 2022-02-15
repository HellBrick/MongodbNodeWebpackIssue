import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost");
await client.connect();
const { databases } = await client.db("admin").admin().listDatabases();
console.log(databases);
