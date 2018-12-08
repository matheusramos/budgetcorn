/* @flow */
import idb from 'idb';
import type { Item } from '../ducks/item/flow';

// TODO: show error if indexedDB is not supported by browser

const DATABASE_NAME: 'budgetcorn' = 'budgetcorn';
const ITEM_OBJSTORE_NAME: 'items' = 'items';

// open database
const dbPromise = idb.open(DATABASE_NAME, 1, upgradeDB => {
  if (!upgradeDB.objectStoreNames.contains('items')) {
    // create object store, if it does not exist
    upgradeDB.createObjectStore(ITEM_OBJSTORE_NAME, { keyPath: 'id', autoIncrement: true });
  }
});

async function get(itemId: string): Promise<Item> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readonly');
  const items = tx.objectStore(ITEM_OBJSTORE_NAME);
  return items.get(itemId);
}

async function getAll(): Promise<Item[]> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readonly');
  const items = tx.objectStore(ITEM_OBJSTORE_NAME);
  return items.getAll();
}

async function insert(item: Item): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readwrite');
  const items = tx.objectStore(ITEM_OBJSTORE_NAME);
  items.add(item);
  return tx.complete;
}

async function put(item: Item): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readwrite');
  const items = tx.objectStore(ITEM_OBJSTORE_NAME);
  items.put(item);
  return tx.complete;
}

async function remove(itemId: string): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction(ITEM_OBJSTORE_NAME, 'readwrite');
  const items = tx.objectStore(ITEM_OBJSTORE_NAME);
  items.delete(itemId);
  return tx.complete;
}

export { remove, get, getAll, insert, put };
