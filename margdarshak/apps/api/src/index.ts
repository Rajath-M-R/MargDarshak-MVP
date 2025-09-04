import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getFirestore } from './config/firebaseAdmin';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
	const hasFirebaseCreds = Boolean(
		process.env.FIREBASE_PROJECT_ID &&
		process.env.FIREBASE_CLIENT_EMAIL &&
		process.env.FIREBASE_PRIVATE_KEY
	);
	if (!hasFirebaseCreds) {
		return res.json({ status: 'ok', service: 'api', firestore: 'skipped', ts: Date.now() });
	}
	try {
		await getFirestore().runTransaction(async () => {});
		res.json({ status: 'ok', service: 'api', firestore: 'ready', ts: Date.now() });
	} catch (e) {
		res.status(500).json({ status: 'error', error: String(e) });
	}
});

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(port, () => {
	console.log(`API listening on http://localhost:${port}`);
});
