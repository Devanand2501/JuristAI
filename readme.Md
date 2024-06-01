# JuristAI

JuristAI is a conversational AI bot specialized in legal matters. It provides responses strictly adhering to court and legal terminology and concepts. Built using advanced natural language processing techniques, JuristAI aims to assist users in legal queries and discussions by generating relevant and accurate responses within the legal domain.

## Features

- Legal conversational bot powered by state-of-the-art language models.
- Responses strictly adhere to court and legal terminology and concepts.
- Capable of generating relevant and accurate responses to legal queries.
- Avoids generating responses unrelated to legal matters.

## How to Use

### Frontend Setup

1. **Start Frontend Server**:
    a. Navigate to the client directory:
       ```bash
       cd client
       ```
    b. Install dependencies:
       ```bash
       npm install
       ```
    c. Start the frontend server:
       ```bash
       npm run dev
       ```

### Backend Setup

1. **Start Backend Server**:
    a. Navigate to the server directory:
       ```bash
       cd server
       ```
    b. Activate the virtual environment:
       ```bash
       source venv/Scripts/activate
       ```
    c. Install dependencies:
       ```bash
       pip install -r requirements.txt
       ```
    d. Start the Flask server:
       ```bash
       python main.py
       ```

## How It Works

1. The frontend server serves the user interface, allowing users to interact with the JuristAI bot.
2. User queries are sent from the frontend to the backend server via HTTP requests.
3. The Flask backend server handles incoming requests, processes the user queries using the JuristAI model, and sends back the generated responses.
4. The responses are displayed to the user on the frontend interface.

## Contribution

Contributions to JuristAI are welcome! Whether it's bug fixes, feature enhancements, or documentation improvements, feel free to open issues or pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Additional Details

- The frontend is built using Nextjs, while the backend is powered by Flask.
- Cross-Origin Resource Sharing (CORS) is implemented in the Flask backend to handle requests from the frontend.
- The project follows best practices for code quality, security, and performance.
