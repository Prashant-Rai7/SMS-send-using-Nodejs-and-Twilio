// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const accountSid = "ACf7cf86262e16d2d2ea204e89432e42d8";
const authToken = "ba8fd697c97aca6c7a83f760a30a151b";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Sagar, this is my Second message from Node.js',
     from: '+14754739875',
     to: '+917359030960'
   })
  .then(message => console.log(message.sid));
