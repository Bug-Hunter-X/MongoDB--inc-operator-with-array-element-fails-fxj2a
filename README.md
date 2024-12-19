# MongoDB $inc operator with array element fails
This example demonstrates an uncommon error related to the use of the `$inc` operator in MongoDB when attempting to update an array element.  The `$inc` operator is designed to atomically increment numeric fields, but its application to array elements using dot notation is not directly supported.

The `bug.js` file shows the incorrect usage that results in an unexpected outcome. The `bugSolution.js` file presents the correct way to achieve the desired array element modification.