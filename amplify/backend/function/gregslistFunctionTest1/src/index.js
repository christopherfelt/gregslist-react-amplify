var AWS = require("aws-sdk");
AWS.config.update({region:'us-east-2'});

var iotdata = new AWS.IotData({
  endpoint: "https://a2rfrvyjik0srb-ats.iot.us-east-2.amazonaws.com",
});

exports.handler = (event) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach((record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
  });

  var params = {
    topic: "test/topic",
    payload: JSON.stringify({"message":"hello from lambda for reals"}),
    qos: 0,
  };

  iotdata.publish(params, function (err, data) {
    if (err) {
      console.log("Error occurred: ", err);
    } else {
      console.log("success.....");
    }
  });

  // return Promise.resolve("Successfully processed DynamoDB record");
};
