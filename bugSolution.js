```javascript
// Correct way to update an array element using the $ positional operator
db.collection.updateOne({"_id": 1, "myArray": {"$elemMatch": {"$eq": 0}}}, {"$inc": {"myArray.$": 1}});
// Alternative using arrayFilters for more complex scenarios:
db.collection.updateOne({"_id": 1}, {"$inc": {"myArray": 1}},{arrayFilters: [{"myArray": {$eq: 0}}]}); 
//To update specific element at a specific index
db.collection.updateOne({"_id": 1}, {"$inc": {"myArray.0": 1}});
```