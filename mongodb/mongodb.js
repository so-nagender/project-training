import * as mongoModule from 'mongodb';

const url = "mongodb://localhost:27017";
const db_name = "mongo_training"

function mongoClient() {
    return mongoModule.MongoClient;
}

function getDatabase(client, dbName){
    client.connect(url, function(err, db) {
        if (err) throw err;
        
        return db.db(db_name);
    });

}

function getCollection(db, collectionName) {
    db.collection(collectionName, function(err, collection) {
        if (err) throw err;
        return collection;
    });
}
