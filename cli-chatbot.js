import readline from 'readline';
import axios from 'axios';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const API_URL = 'http://localhost:3000/api/chat';
const chatHistory = [];

async function chat() {
    console.log(colors.green('\nDeepSeek Chatbot (Type "exit" to quit)\n'));
    
    while (true) {
        const userInput = await new Promise(resolve => {
            rl.question(colors.yellow('You: '), resolve);
        });

        if (userInput.toLowerCase() === 'exit') {
            console.log(colors.green('Goodbye!'));
            process.exit(0);
        }

        try {
            process.stdout.write(colors.cyan('Bot: '));
            
            const messages = [
                ...chatHistory,
                { role: 'user', content: userInput }
            ];

            const response = await axios.post(API_URL, { messages });
            const botReply = response.data.choices[0].message.content;
            
            console.log(colors.cyan(botReply));
            chatHistory.push(
                { role: 'user', content: userInput },
                { role: 'assistant', content: botReply }
            );
        } catch (error) {
            console.error(colors.red('\nError:'), error.response?.data?.error || error.message);
        }
    }
}

chat();