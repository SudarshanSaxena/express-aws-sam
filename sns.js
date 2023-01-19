// Load the AWS SDK for Node.js
var AWS = require('aws-sdk')// Set region
var credentials = new AWS.SharedIniFileCredentials({profile: 'sudarshan-admin'});
AWS.config.credentials = credentials

AWS.config.update({region: 'ap-south-1'});

// Create publish parameters
var params = {
  Message: 'MESSAGE_TEXT', /* required */
  TopicArn: 'arn:aws:sns:ap-south-1:148638311862:demo-topic'
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
