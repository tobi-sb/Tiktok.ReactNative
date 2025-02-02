import { auth } from '../firebase/config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';

export const authService = {
  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  },

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  },

  async logout() {
    return signOut(auth);
  },

  async resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }
};