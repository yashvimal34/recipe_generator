# Recipe Generator

A small React + Vite web app that generates cooking recipes from user-provided ingredients and prompts using the Hugging Face Inference API.

This repository contains the frontend for a dynamic recipe generator built with React, Vite, and the @huggingface/inference client. The app accepts ingredient lists or prompts, sends them to a model via the Hugging Face Inference API, and renders the returned recipe using react-markdown.

## Features

- Enter ingredients or a short prompt and generate a recipe
- Uses @huggingface/inference for model-driven text generation
- Renders Markdown output with react-markdown
- Fast development with Vite and React 19

## Tech stack

- React 19
- Vite
- @huggingface/inference
- react-markdown

## Requirements

- Node.js (recommend v18+)
- A Hugging Face API token (see Environment Variables)

## Installation

1. Clone the repository:

   git clone https://github.com/yashvimal34/recipe_generator.git
   cd recipe_generator

2. Install dependencies:

   npm install

3. Create a .env file in the project root and add your Hugging Face API token:

   HUGGINGFACE_API_KEY=hf_your_api_token_here

   The frontend code expects this token to be used when calling the @huggingface/inference client. Make sure not to commit your API token.

## Available scripts

- npm run dev — start the Vite development server
- npm run build — build for production
- npm run preview — locally preview the production build
- npm run lint — run oxlint (if configured)

These scripts are defined in package.json.

## Usage

1. Start the dev server:

   npm run dev

2. Open the app in your browser (Vite will print the local URL, usually http://localhost:5173).

3. Enter ingredients (or a prompt) and submit to generate a recipe. The app will show the generated recipe in Markdown format.

## How it works (high level)

- The frontend collects user input and sends it to a serverless function or client code that uses @huggingface/inference to query a text-generation model.
- The response from the model is treated as Markdown and rendered using react-markdown.

Note: If the repository currently contains only frontend code, ensure that calls to the Hugging Face API are handled securely (for example, via a backend or serverless endpoint) so you don't expose an API token in client-side code.

## Environment & Security

- Do not commit secrets or API keys to the repository.
- For production deployments, proxy API requests through a backend that stores the HUGGINGFACE_API_KEY securely.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a clear description of the change.

## License

If you want to add a license, create a LICENSE file in the repository (for example, MIT).