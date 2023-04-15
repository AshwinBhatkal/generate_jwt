const jwt = require("jsonwebtoken");

var body = {
  name_id: "local-user",
  first_name: "Local",
  last_name: "User",
  user_ID: "local-user",
  adGroups: [
    "WEIoT US Building Controls",
    "WEIoT US TRE Managers",
    "WEIoT US Digital Asset Managers",
    "WEIoT US Building Performance Managers"
  ]
};

const token = jwt.sign(body, "PokerFace");
console.log(token);
