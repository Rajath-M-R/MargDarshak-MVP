import { embedText } from '../services/vertex';

type RagDoc = { id: string; content: string; vector?: number[] };

export async function retrieveRelevantDocuments(_query: string, _limit = 5): Promise<RagDoc[]> {
	// TODO: Replace with vector search (e.g., Firestore + external vector DB)
	await embedText(_query);
	return [];
}

export async function answerWithRag(prompt: string): Promise<{ answer: string; sources: RagDoc[] }> {
	const sources = await retrieveRelevantDocuments(prompt, 5);
	return { answer: 'stubbed answer', sources };
}
