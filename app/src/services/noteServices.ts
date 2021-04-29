import axios from 'axios';
import type { INote } from '../../types/notes';
import firebase from 'firebase/app';

const url = 'http://localhost:8081/api';

const createToken = async () => {
  const user = firebase.auth().currentUser;
  const token = user && (await user.getIdToken());
  const payloadHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return payloadHeader;
};

export const getNotes = async () => {
  const header = await createToken();
  try {
    const res = await axios.get(url, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const addToNotes = async (
  title: INote['title'],
  content: INote['content'],
) => {
  const header = await createToken();
  const payload = { title, content };

  try {
    const res = await axios.post(url, payload, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
