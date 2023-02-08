const { ALL_USERS, generateUsers } = require("./generateUsers");
const { ALL_TWEETS } = require("./generateTweets");
const fs = require("fs");

const generateDatabase = () => {
  const thisUser = generateUsers(1);

  return {
    users: [...thisUser, ...ALL_USERS],
    this_user: thisUser,
    tweets: [...ALL_TWEETS],
  };
};

const data = generateDatabase();

const strData = JSON.stringify(data);

const writeDatabase = () => {
  fs.writeFile("db.json", strData, function (err, result) {
    if (err) console.log("error", err);
  });
};

module.exports = writeDatabase;
