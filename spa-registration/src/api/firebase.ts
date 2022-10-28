// api
import { database } from 'api/databaseConfig';
import { collection, addDoc } from '@firebase/firestore';
// constants
import { Registration } from 'constants/index';

async function saveDataToDatabase(values: Registration) {
  const usersCollectionRef = collection(database, 'users');
  const spaces = 2;

  try {
    await addDoc(usersCollectionRef, values);
    alert(`Success! \n ${JSON.stringify(values, null, spaces)}`);
  } catch (e) {
    alert(e);
  }
}

export default saveDataToDatabase;
