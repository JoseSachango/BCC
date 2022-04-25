let db;
// create a new db request for a "budget" database.
db = indexedDB.open("budget",1);


request.onupgradeneeded = function (event) {
  // create object store called "pending" and set autoIncrement to true
  db = event.target.result;
  let budgetStore = db.createObjectStore("pending",{autoIncrement:true});
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access\

  //record is an object with data we want to pass to the indexDB
  let transaction = db.transaction(["pending"],"readwrite");
  let pendingObjectStore = transaction.objectStore("pending");


  pendingObjectStore.add(record)




  // access your pending object store
  // add record to your store with add method.
}

function checkDatabase() {
  // open a transaction on your pending db
  let CDtransaction = db.transaction(["pending"],"readwrite");
  let pendingObjectStore = CDtransaction.objectStore("pending");
  let getAll = pendingObjectStore.getAll()



  // access your pending object store
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
