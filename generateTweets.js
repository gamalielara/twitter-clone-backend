const { faker } = require("@faker-js/faker");
const { ALL_USERS } = require("./generateUsers");

const generateTweets = () => {
  const MAX_NUMBER_OF_TWEETS = faker.datatype.number();
  const tweets = [];

  for (let i = 0; i < MAX_NUMBER_OF_TWEETS; i++) {
    const selectedUser =
      ALL_USERS[faker.datatype.number({ max: ALL_USERS.length - 1 })];
    const selectedUserId = selectedUser._id;

    const tweet = {
      _id: faker.datatype.uuid(),
      tweet_body: faker.lorem.paragraph(),
      replies_count: faker.datatype.number({
        max: selectedUser.is_verified ? 9999999 : 30,
      }),
      retweet_count: faker.datatype.number({
        max: selectedUser.is_verified ? 9999999 : 50,
      }),
      likes_count: faker.datatype.number({
        max: selectedUser.is_verified ? 9999999 : 100,
      }),
      is_liked: faker.datatype.boolean(),
      is_retweeted: faker.datatype.boolean(),
      image_attached: Array.from(
        {
          length: faker.datatype.number({ min: 0, max: 4 }),
        },
        () => faker.image.abstract(null, null, true)
      ),
      user: getUser(selectedUserId),
    };

    tweets.push(tweet);
  }

  return tweets;
};

const getUser = (userId) => {
  return ALL_USERS.find((user) => user._id === userId) || null;
};

const ALL_TWEETS = generateTweets();

module.exports = { ALL_TWEETS };
