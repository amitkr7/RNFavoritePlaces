import * as SQLite from 'expo-sqlite';
import { Place } from '../models/place';

const database = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (place) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO places (title,imageUri,address,lat,lng) VALUES (?,?,?,?,?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const fetchplaces = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          console.log(result);
          const places = [];
          for (const dp of result.rows._array) {
            places.push(
              new Place(
                dp.title,
                dp.imageUri,
                {
                  address: dp.address,
                  lat: dp.lat,
                  lng: dp.lng,
                },
                dp.id
              )
            );
          }
          resolve(places);
        },
        (_, error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const fetchPlaceDetails = (id) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM places where id=?`,
        [id],
        (_, result) => {
          resolve(result.rows._array[0]);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};
