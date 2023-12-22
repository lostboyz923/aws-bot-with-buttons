var botBuilder = require('claudia-bot-builder'),
    excuse = require('huh');

module.exports = botBuilder(function (request) {
    console.log('got text', message.text); 
    console.log('full request'. JSON.stringify(message.originalRequest)); 
    
  return 'Thanks for sending ' + request.text  + 
      '. Your message is very important to us, but ' + 
      excuse.get();
});