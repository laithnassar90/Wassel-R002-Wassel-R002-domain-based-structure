// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Define the path to your build directory
const BUILD_DIR = path.resolve(__dirname, 'build');

// Serve static files from the React app
app.use(express.static(BUILD_DIR));

// Catch-all handler: sends index.html for any route (SPA support)
app.get('/:path(*)', (req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'), (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Handle 404 for API routes or other unknown paths
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error('Server failed to start:', err);
    process.exit(1);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});