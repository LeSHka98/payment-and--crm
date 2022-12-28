// libraries
import { NavigateFunction } from 'react-router-dom';
// api
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { database, auth } from 'api/FireBase/databaseConfig';
import { setDoc, getDoc, doc } from '@firebase/firestore';
// constants
import { Registration, Login } from 'constants/common';

const register = async ({ email, password }: Login): Promise<boolean> => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    alert(e);

    return false;
  }

  return true;
};

export const logIn = async (values: Login, navigate: NavigateFunction) => {
  let isSignInSuccessful = true;

  try {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  } catch (e) {
    isSignInSuccessful = false;
    alert(e);
  }
  if (isSignInSuccessful) {
    navigate('/');
  }
};

export const logOut = async (navigate: NavigateFunction) => {
  let isLogOutSuccessful = true;

  try {
    await signOut(auth);
  } catch (e) {
    isLogOutSuccessful = false;
    alert(e);
  }
  if (isLogOutSuccessful) {
    navigate('/login');
  }
};

const createUser = async (values: Registration) => {
  const { repeatedPassword, email, ...mainFields } = values;
  const documentRef = doc(database, 'users', email);

  try {
    await setDoc(documentRef, { email, ...mainFields });
  } catch (e) {
    alert(e);
  }
};

export const createUserAndRegister = async (values: Registration, navigate: NavigateFunction) => {
  const { email, password } = values;

  const isRegisterSuccessful = await register({ email, password });

  if (isRegisterSuccessful) {
    await createUser(values);
    navigate('/');
  }
};

export const getUserInfo = async (email: string): Promise<Registration> => {
  const docRef = doc(database, 'users', email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Registration;
  }
  alert('No such document!');

  return null;
};
