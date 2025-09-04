export type VertexTextParams = { model: string; temperature?: number; topP?: number; maxOutputTokens?: number };
export async function generateText(_prompt: string, _params: VertexTextParams) {
	// TODO: Implement with @google-cloud/vertexai TextServiceClient
	return { output: 'stub', candidates: [] as string[] };
}

export async function embedText(_text: string) {
	// TODO: Implement text embedding using Vertex embeddings model
	return { vector: [] as number[] };
}

export async function synthesizeSpeech(_text: string) {
	// TODO: Implement TTS via Vertex or Cloud Text-to-Speech
	return { audioContent: '' };
}
