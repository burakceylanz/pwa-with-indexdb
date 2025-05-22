import { openDB } from 'idb';

const DB_NAME = 'pwa-posts-db';
const STORE_NAME = 'posts';

export const initDB = async () => {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const savePostsToDB = async (posts: any[]) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  posts.forEach((post) => store.put(post));
  await tx.done;
};

export const getPostsFromDB = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};
