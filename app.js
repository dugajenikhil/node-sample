var express = require('express');
var dotenv = require('dotenv').config();
var app = express();
app.get('/', function (req, res) {
  res.send('App Running');
})
app.get('/stringify', function (req, res) {
  try {
    if(req.query.err) throw new Error('custom error message')
    let response = {
      id: 4404,
      tenantId: "creighton",
      firstName: "Aden",
      middleName: "Michael",
      lastName: "Boyle",
      email: "S8046_47_P2P_Stud3@yopmail.com",
      sisUserId: null,
      status: 1,
      phone: null,
      latestAddDropDate: null,
      adoptionsChangeDate: null,
      requestId: "6952165c-74cf-4400-83ac-1bb738093af0"
    }
    let json1 = {
      email: "A8046_47_P2P_Stud3@yopmail.com",
      requestId: "0952165c-74cf-4400-83ac-1bb738093af0",
      methodName: "/getUser1",
      logType: "7",
      request: null,
      response: JSON.stringify(response),
      error: null,
      remarks: "app: /getUser: Completed /getUser API",
      createdAt: "2020-09-04T07:50:03.778Z"
    }
    console.log(JSON.stringify(json1))
    res.send(json1);
  } catch (error) {
    let response = {
      id: 4404,
      tenantId: "creighton",
      firstName: "Aden",
      middleName: "Michael",
      lastName: "Boyle",
      email: "S8046_47_P2P_Stud3@yopmail.com",
      sisUserId: null,
      status: 1,
      phone: null,
      latestAddDropDate: null,
      adoptionsChangeDate: null,
      requestId: "6952165c-74cf-4400-83ac-1bb738093af0"
    }
    let json1 = {
      email: "A8046_47_P2P_Stud3@yopmail.com",
      requestId: "0952165c-74cf-4400-83ac-1bb738093af0",
      methodName: "/getUser1",
      logType: "7",
      request: null,
      response: JSON.stringify(response),
      error: JSON.stringify(error, ["name", "message", "arguments", "type", "stack"]),
      remarks: "app: /getUser: Completed /getUser API",
      createdAt: "2020-09-04T07:50:03.778Z"
    }
    console.log(JSON.stringify(json1))
    res.send(json1);
  }
});

app.get('/wstringify', function (req, res) {
  let response = {
    id: 4404,
    tenantId: "creighton",
    firstName: "Aden",
    middleName: "Michael",
    lastName: "Boyle",
    email: "S8046_47_P2P_Stud3@yopmail.com",
    sisUserId: null,
    status: 1,
    phone: null,
    latestAddDropDate: null,
    adoptionsChangeDate: null,
    requestId: "6952165c-74cf-4400-83ac-1bb738093af0"
  }
  let json1 = {
    email: "A8046_47_P2P_Stud3@yopmail.com",
    requestId: "0952165c-74cf-4400-83ac-1bb738093af0",
    methodName: "/getUser1",
    logType: "7",
    request: null,
    response,
    error: null,
    remarks: "app: /getUser: Completed /getUser API",
    createdAt: "2020-09-04T07:50:03.778Z"
  }
  console.log(JSON.stringify(json1))
  res.send(json1);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
