import admin from firebase-admin;

let firebaseAdminApp: admin.app.App | null = null;

export function getFirebaseAdminApp(): admin.app.App {
	if (firebaseAdminApp) return firebaseAdminApp;
	if (admin.apps.length) {
		firebaseAdminApp = admin.app();
		return firebaseAdminApp;
	}

	const projectId = process.env.FIREBASE_PROJECT_ID;
	const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
	const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, n);

	if (!projectId || !clientEmail || !privateKey) {
		throw new Error(Missing
