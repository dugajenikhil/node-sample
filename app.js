var express = require('express');
var dotenv = require('dotenv').config();

var app = express();
app.get('/', function (req, res) {
  res.send('App Running');
})
app.get('/stringify', function (req, res) {
  let json1 = {
    "email": "A8046_47_P2P_Stud3@yopmail.com",
    "requestId": "0952165c-74cf-4400-83ac-1bb738093af0",
    "methodName": "/getUser1",
    "logType": "7",
    "request": null,
    "response": "{\"id\":4404,\"tenantId\":\"creighton\",\"firstName\":\"Aden\",\"middleName\":\"Michael\",\"lastName\":\"Boyle\",\"email\":\"S8046_47_P2P_Stud3@yopmail.com\",\"sisUserId\":null,\"status\":1,\"phone\":null,\"latestAddDropDate\":null,\"adoptionsChangeDate\":null,\"requestId\":\"6952165c-74cf-4400-83ac-1bb738093af0\"}",
    "error": null,
    "remarks": "app: /getUser: Completed /getUser API",
    "createdAt": "2020-09-04T07:50:03.778Z"
  }
  console.log(json1)

  let json2 = {
    "email": "B8046_47_P2P_Stud3@yopmail.com",
    "requestId": "1952165c-74cf-4400-83ac-1bb738093af0",
    "methodName": "/getUser2",
    "logType": "7",
    "request": null,
    "response": "{\"id\":4404,\"tenantId\":\"creighton\",\"firstName\":\"Aden\",\"middleName\":\"Michael\",\"lastName\":\"Boyle\",\"email\":\"S8046_47_P2P_Stud3@yopmail.com\",\"sisUserId\":null,\"status\":1,\"phone\":null,\"latestAddDropDate\":null,\"adoptionsChangeDate\":null,\"requestId\":\"6952165c-74cf-4400-83ac-1bb738093af0\"}",
    "error": null,
    "remarks": "app: /getUser: Completed /getUser API",
    "createdAt": "2020-09-04T07:50:03.778Z"
  }
  console.log(json2)
  let response = JSON.stringify(json1)
  res.send(response);
});

app.get('/wstringify', function (req, res) {
  let json1 = {
    "email": "S8046_47_P2P_Stud3@yopmail.com",
    "requestId": "dcf62acc-955c-49ef-b7ef-46627ba5db9b",
    "methodName": "/getUser",
    "logType": "7",
    "request": null,
    "response": {
      "id": 4404,
      "tenantId": "creighton",
      "firstName": "Aden",
      "middleName": "Michael",
      "lastName": "Boyle",
      "email": "S8046_47_P2P_Stud3@yopmail.com",
      "sisUserId": null,
      "status": 1,
      "phone": null,
      "latestAddDropDate": null,
      "adoptionsChangeDate": null,
      "requestId": "dcf62acc-955c-49ef-b7ef-46627ba5db9b"
    },
    "error": null,
    "remarks": "app: /getUser: Completed /getUser API",
    "createdAt": "2020-09-04T08:05:20.020Z"
  }
  console.log(json1)

  let json2 = {
    "email": "S8046_47_P2P_Stud3@yopmail.com",
    "requestId": "dcf62acc-955c-49ef-b7ef-46627ba5db9b",
    "methodName": "/getUser",
    "logType": "7",
    "request": null,
    "response": {
      "id": 4404,
      "tenantId": "creighton",
      "firstName": "Aden",
      "middleName": "Michael",
      "lastName": "Boyle",
      "email": "S8046_47_P2P_Stud3@yopmail.com",
      "sisUserId": null,
      "status": 1,
      "phone": null,
      "latestAddDropDate": null,
      "adoptionsChangeDate": null,
      "requestId": "dcf62acc-955c-49ef-b7ef-46627ba5db9b"
    },
    "error": null,
    "remarks": "app: /getUser: Completed /getUser API",
    "createdAt": "2020-09-04T08:05:20.020Z"
  }
  console.log(json2)
  let response = JSON.stringify(json1)
  res.send(response);
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
