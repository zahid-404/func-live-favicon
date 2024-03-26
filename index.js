const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/getFavicon", async (req, res) => {
  try {
    const { websiteUrl } = req.body;

    // Fetch the website's HTML
    const response = await axios.get(websiteUrl);

    // Load HTML into Cheerio for easy manipulation
    const $ = cheerio.load(response.data);

    // Extract the favicon URL from the HTML
    let faviconUrl =
      $('link[rel="icon"]').attr("href") ||
      $('link[rel="shortcut icon"]').attr("href");

    // If favicon URL is relative, prepend the website's domain
    if (faviconUrl && !faviconUrl.startsWith("http")) {
      const domain = new URL(websiteUrl).origin;
      faviconUrl = new URL(faviconUrl, domain).href;
    }

    if (faviconUrl) {
      // Return the favicon URL
      res.json({ faviconUrl });
    } else {
      res.status(404).json({ error: "Favicon not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
