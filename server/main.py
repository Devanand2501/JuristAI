import os
import logging
from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from langchain_community.llms import HuggingFaceHub
from langchain.memory import ConversationBufferMemory
from chat_with_documents import configure_retrieval_chain
from prompt import user_prompt
from langchain_core.output_parsers import StrOutputParser
from flask_cors import CORS,cross_origin


parser = StrOutputParser()

# Configure logging
logging.basicConfig(level=logging.INFO)

# Initialize the HuggingFaceHub LLM
llm = HuggingFaceHub(
    repo_id="mistralai/Mistral-7B-Instruct-v0.2",
    task="text-generation",
    huggingfacehub_api_token="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",
    model_kwargs={
        "max_new_tokens": 2000,
        "top_k": 30,
        "temperature": 0.1,
        "repetition_penalty": 1.03,
    },
)

# Initialize the memory buffer
MEMORY = ConversationBufferMemory(
    memory_key='chat_history',
    return_messages=True,
    input_key='input',
    output_key='output'
)

# Flask app setup
app = Flask(__name__)
CORS(app)


@app.route("/api/chat", methods=["GET", "POST"])
def qa():
    if request.method == "POST":
        question = request.json.get("msg")
        if not question:
            return jsonify({"error": "No question provided"}), 400
        print(question)

        # Use memory to keep track of conversation history
        MEMORY.save_context({"input": question}, {"output": ""})
        chat_history = MEMORY.load_memory_variables({})
        
        # Configure the retrieval chain with the prompt
        CONV_CHAIN = configure_retrieval_chain(prompt=user_prompt)
        
        # Generate response
        response = CONV_CHAIN.run({
            "question": question,
            "chat_history": chat_history
        })
        
        # Update memory with the response
        MEMORY.save_context({"input": question}, {"output": response})
        
        data = {"question": question, "answer": response}
        print(data)
        return jsonify(data)
    
    # Default response for GET requests
    data = {"result": "Thank you! I'm just a machine learning model designed to respond to questions and generate text based on my training data. Is there anything specific you'd like to ask or discuss?"}
    return print(parser.invoke(data))

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)
