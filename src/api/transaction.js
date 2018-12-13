/* @flow */
import idb from 'idb';
import { DATABASE_NAME, ITEM_OBJSTORE_NAME } from '../settings';
import type { Transaction } from '../ducks/transaction/flow';

// TODO: show error if indexedDB is not supported by browser

// open database
const dbPromise = idb.open(DATABASE_NAME, 2, upgradeDB => {
  if (!upgradeDB.objectStoreNames.contains(ITEM_OBJSTORE_NAME)) {
    // create object store, if it does not exist
    upgradeDB.createObjectStore(ITEM_OBJSTORE_NAME, { keyPath: 'id', autoIncrement: true });
  }
});

async function get(transactionId: string): Promise<Transaction> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readonly');
  const transactions = tx.objectStore(ITEM_OBJSTORE_NAME);
  return transactions.get(transactionId);
}

async function getAll(): Promise<Transaction[]> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readonly');
  const transactions = tx.objectStore(ITEM_OBJSTORE_NAME);
  return transactions.getAll();
}

async function insert(transaction: Transaction): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readwrite');
  const transactions = tx.objectStore(ITEM_OBJSTORE_NAME);
  transactions.add(transaction);
  return tx.complete;
}

async function put(transaction: Transaction): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readwrite');
  const transactions = tx.objectStore(ITEM_OBJSTORE_NAME);
  transactions.put(transaction);
  return tx.complete;
}

async function remove(transactionId: string): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readwrite');
  const transactions = tx.objectStore(ITEM_OBJSTORE_NAME);
  transactions.delete(transactionId);
  return tx.complete;
}

export { remove, get, getAll, insert, put };
