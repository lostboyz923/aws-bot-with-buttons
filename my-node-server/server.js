var CryptoJS = require("crypto-js");
const express = require('express');
const app = express();
const port = 3000;

// configure middleware 
app.use(express.json()); 

function handleWebhookEvent(event) {
    // Handle the event
    console.log('Webhook received unknown event:', event);
}

// Endpoint to handle incoming webhook requests
app.post('/webhook', (req, res) => {
    const { body } = req;

    
  // Log the incoming payload
  console.log('Received webhook payload:', req.body);

  // Respond to the webhook request (optional)
  res.status(200).send('Webhook received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});