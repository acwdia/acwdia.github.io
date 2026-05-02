---
title: IndexedDB
---

# IndexedDB

For larger, more complex datasets, IndexedDB is the go-to solution. It’s a low-level API that allows developers to store large amounts of structured data, including files and blobs, in the browser. Unlike local storage, which is limited to strings and around 5-10MB of space, IndexedDB can store complex objects and much larger amounts of data.

IndexedDB has many advantages over cookies and web storage. It can store hundreds of MBs of data and natively supports complex data structures like arrays and objects. IndexedDB can also be used asynchronously. However, the downside of IndexedDB is that the API is more complex and harder to work with than cookies and web storage. 

## Using IndexedDB

IndexedDB works asynchronously using a request-response model. The basic pattern for working with IndexedDB is as follows:

1. Open a database
1. Create an object store in the database
1. Start a transaction and make a request to do some database operation
1. Wait for the operation to complete
1. Perform action with the results

### Opening a database

The process begins with calling the `open()` function, which returns an `IDBOpenDBRequest` object with a result (success) or error value that you handle as an event. The `open()` function takes two arguments: the database name and version. The result for the `open` function is an instance of an `IDBDatabase`. 

```js
// opening a database
const request = indexedDB.open("MyDatabase", 1)
```

The version of the database determines the database schema — the object stores in the database and their structure. If the database doesn't already exist, it is created by the open operation, then an `onupgradeneeded` event is triggered, and you create the database schema in the handler for this event. If the database does exist but you are specifying an upgraded version number, an `onupgradeneeded` event is triggered immediately, allowing you to provide an updated schema in its handler. 

### Adding handlers

After the make an IndexedDB request, the next thing is to add success and error handlers. This can be accomplished using the `onsuccess()` and `onerror()` functions. If everything succeeds, a success event is fired with `request` as its target. Once it is fired, the `onsuccess()` function on `request` is triggered with the success event as its argument. Otherwise, if there was any problem, an error event is fired at `request`. This triggers the `onerror()` function with the error event as its argument.

```js
// opening a database
let db
const request = indexedDB.open("MyDatabase", 1)

request.onerror = function(event) {
  console.log("Error opening database:", event.target.error)
}

request.onsuccess = function(event) {
  db = event.target.result
  console.log("Database opened successfully")
}
```

### Creating an object store

When you create a new database or increase the version number of an existing database, the `onupgradeneeded` event is triggered. The object store should be created in this event handler. 

Object stores are created with a single call to `createObjectStore()`. The method takes the name of the store and a parameter object. The `createIndex()` method creates an index to allow searching of the object store by a specific property. 


```js
// opening a database
let db
const request = indexedDB.open("MyDatabase", 1)

request.onerror = function(event) {
  console.log("Error opening database:", event.target.error)
}

request.onsuccess = function(event) {
  db = event.target.result
  console.log("Database opened successfully")
}

request.onupgradeneeded = function(event) {
  // retrieving the IDDBDatabase interface
  db = event.target.result
  
  // creating the database object store
  const objectStore = db.createObjectStore("users", { keyPath: "id" })

  // creating an index to search by name
  objectStore.createIndex("name", "name", { unique: false })
  console.log("Object store created")
}
```

### Adding and retrieving data

Before you can do anything with your new database, you need to start a transaction. Transactions come from the database object, and you have to specify which object stores you want the transaction to span. Once you are inside the transaction, you can access the object stores that hold your data and make your requests. Next, you need to decide if you will make changes to the database or if you just need to read from it. Transactions have three available modes: `readonly`, `readwrite`, and `versionchange`.

The `transaction()` function takes two arguments and returns a transaction object. The first argument is an array of object stores that the transaction will span. The second is the transaction mode. If no second argument is provided, the `readonly` mode will be set. 

To add data, we first create a transaction. We create a transaction on the `'users'` object store. The `'readwrite'` mode allows us to write data. Then we access the object store and use the `add()` method to insert new entries. 

```js
// adding data
function addUser(id, name) {
  const transaction = db.transaction(["users"], "readwrite")
  const objectStore = transaction.objectStore("users")
  const request = objectStore.add({ id: id, name: name })

  request.onsuccess = function(event) {
    console.log("User added successfully")
  };

  request.onerror = function(event) {
    console.log("Error adding user:", event.target.error)
  };
}

addUser(1, "John Doe")
```

Retrieving data requires a similar process. We create a transaction and use the `get()` method to retrieve a user by the `id`. 

```js
function getUser(id) {
  let transaction = db.transaction(["users"])
  let objectStore = transaction.objectStore("users")
  let request = objectStore.get(id)

  request.onsuccess = function(event) {
    console.log("User retrieved:", request.result)
  }

  request.onerror = function(event) {
    console.log("Error retrieving user:", event.target.error)
  }
}

getUser(1)
```

## IndexedDB Libraries

While IndexedDB is powerful, it can be verbose and complex. Thankfully, there are libraries that simplify working with it:

- [Dexie.js](https://dexie.org/): A minimalistic wrapper for IndexedDB that simplifies its API.
- [LocalForage](https://localforage.github.io/localForage/): Provides a simple API for storing data in IndexedDB, local storage, or WebSQL.
- [idb](https://github.com/jakearchibald/idb): A small, simple library for using promises with IndexedDB.

## See Also
- [Using IndexedDB | MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)

