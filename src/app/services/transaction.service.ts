import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export interface Transaction {
  id?: string;
  amount: number;
  recipient: string;
  date: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  async getTransactions(): Promise<Transaction[]> {
    const user = await this.afAuth.currentUser;
    if (!user) throw new Error('Not logged in');
    const snap = await this.firestore.collection('transactions', ref => ref.where('uid', '==', user.uid)).get().toPromise();
    return snap?.docs.map(doc => ({ id: doc.id, ...doc.data() as any })) || [];
  }

  async addTransaction(tx: Omit<Transaction, 'id'>) {
    const user = await this.afAuth.currentUser;
    if (!user) throw new Error('Not logged in');
    return this.firestore.collection('transactions').add({ ...tx, uid: user.uid });
  }

  async updateTransaction(id: string, tx: Partial<Transaction>) {
    return this.firestore.collection('transactions').doc(id).update(tx);
  }

  async deleteTransaction(id: string) {
    return this.firestore.collection('transactions').doc(id).delete();
  }
}
