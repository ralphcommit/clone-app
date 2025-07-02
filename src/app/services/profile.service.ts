import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Auth, user } from '@angular/fire/auth';
import { firstValueFrom } from 'rxjs';

export interface UserProfile {
  bio?: string;
  displayName?: string;
  photoURL?: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  async getProfile(): Promise<UserProfile | null> {
    const currentUser = await firstValueFrom(user(this.auth));
    if (!currentUser) throw new Error('Not logged in');
    const docRef = doc(this.firestore, `profiles/${currentUser.uid}`);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as UserProfile;
    } else {
      return null;
    }
  }

  async updateProfile(data: UserProfile) {
    const currentUser = await firstValueFrom(user(this.auth));
    if (!currentUser) throw new Error('Not logged in');
    const docRef = doc(this.firestore, `profiles/${currentUser.uid}`);
    await setDoc(docRef, data, { merge: true });
  }
}
