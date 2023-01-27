const { faker } = require("@faker-js/faker");
const Tweet = require("./data class/Tweet");
const { ALL_USERS } = require("./generateUsers");

const generateTweets = () => {
  const MAX_NUMBER_OF_TWEETS = faker.datatype.number();
  const tweets = [];

  for (let i = 0; i < MAX_NUMBER_OF_TWEETS; i++) {
    const selectedUser =
      ALL_USERS[faker.datatype.number({ max: ALL_USERS.length - 1 })];

    const tweet = new Tweet(selectedUser);
    const tweetOne = tweet.generateTweet();

    tweets.push(tweetOne);
  }

  return tweets;
};

const ALL_TWEETS = generateTweets();

module.exports = { ALL_TWEETS };
