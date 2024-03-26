# Favicon Fetcher Express Server

This Express server fetches the favicon URL of a given website URL.

[Gif Preview](https://i.imgur.com/kc5yxoX.gif)

## Installation

1. Clone the repository:

   ```bash
   git clone zahid-404/func-live-favicon.git
   ```

2. Navigate to the project directory:

   ```bash
   cd func-live-favicon
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node index.js
   ```

2. Send a POST request to the `/getFavicon` endpoint with the website URL in the request body to fetch the favicon URL.

   Example using cURL:

   ```bash
   curl -X POST \
        -H "Content-Type: application/json" \
        -d '{"websiteUrl": "https://example.com"}' \
        http://localhost:3000/getFavicon
   ```

3. Receive the favicon URL in the response.

## Dependencies

- [Express.js](https://expressjs.com/): Web framework for Node.js
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js
- [Cheerio](https://cheerio.js.org/): Fast, flexible, and lean implementation of jQuery core for server-side HTML parsing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
