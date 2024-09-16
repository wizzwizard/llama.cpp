import { LlamaModel } from 'node-llama-cpp';

// Define the path to the model
const modelPath = 'c:/users/omair/desktop/llama/tinyllama-1.1b-chat-v1.0.Q8_0.gguf';

// Validate the path
if (!modelPath || typeof modelPath !== 'string') {
    throw new Error('The model path must be a valid string.');
}

// Initialize LlamaModel with configuration
try {
    const model = new LlamaModel({
        modelPath: modelPath, // Required
        seed: null, // Optional, if you want to use a random seed
        contextSize: 4096, // Optional, default is 4096
        batchSize: 8, // Optional, set as needed
        gpuLayers: 2, // Optional, set as needed
        threads: 8, // Optional, default is 6
        temperature: 0.7, // Optional, set as needed
        topK: 50, // Optional, set as needed
        topP: 0.9, // Optional, set as needed
        logitsAll: false, // Optional, set as needed
        vocabOnly: false, // Optional, set as needed
        useMmap: true, // Optional, set as needed
        useMlock: false, // Optional, set as needed
        embedding: false // Optional, set as needed
    });

    console.log('Model initialized successfully.');

    // Use the model for generating a response
    // Note: Ensure `prompt` is the correct method and that it matches the expected usage in the library.
    model.prompt('What is the capital of France?', (err, res) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Response:', res);
        }
    });

} catch (error) {
    console.error('Failed to initialize model:', error);
}
