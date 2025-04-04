# DeepSeek Chatbot

A simple AI chatbot solution featuring both web and command-line interfaces powered by DeepSeek's API.

## Features

-  **Web Interface** - Responsive browser-based chat
-  **CLI Version** - Terminal-based conversation
-  **Conversation History** - Maintains context throughout chat
-  **Fast Responses** - Powered by DeepSeek's LLM
-  **Secure** - API keys protected via `.env`

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/deepseek-chatbot.git
   cd deepseek-chatbot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```ini
   DEEPSEEK_API_KEY=your_api_key_here
   PORT=3000
   ```

## Usage

### Web Interface

Start the server:
   ```bash
   node server.js
   ```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Command Line Interface

Run the chatbot in CLI mode:
   ```bash
   node cli.js
   ```
Type `exit` to quit.

## Project Structure

```
 deepseek-chatbot/
 ├── server.js        # Express API server
 ├── cli.js           # Command-line interface
 ├── public/
 │   └── index.html   # Web interface
 ├── .gitignore       # Ignores node_modules and .env
 ├── package.json     # Dependencies
 └── README.md        # This file
```

## Configuration

Customize settings in `server.js`:

```javascript
{
  model: 'deepseek-chat',
  temperature: 0.7,    // Range: 0-1 (0.7 = balanced)
  max_tokens: 1000     // Response length limit
}
```

## Deployment

### Local Development

Run the application:
   ```bash
   npm start
   ```

