const { ALL_USERS, generateUsers } = require("./generateUsers");
const { ALL_TWEETS } = require("./generateTweets");

const generateDatabase = () => {
  const thisUser = generateUsers(1);

  return {
    users: [...thisUser, ...ALL_USERS],
    this_user: thisUser,
    tweets: [...ALL_TWEETS],
  };
};

module.exports = generateDatabase;
