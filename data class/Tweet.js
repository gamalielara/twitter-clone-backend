const { ALL_USERS } = require("../generateUsers");
const { faker } = require("@faker-js/faker");

class Tweet {
  constructor(user) {
    this.selectedUser = user;
    this.is_verified = user.is_verified;
    this.selectedUserId = user._id;
  }

  replies = this.getReplies();

  repliesCount = this.replies.length;

  likes = this.getLikes();

  likesCount = this.likes.length;

  retweets = this.getRetweets();

  retweetsCount = this.retweets.length;

  isLiked = faker.datatype.boolean();

  isRetweeted = faker.datatype.boolean();

  getReplies() {
    const number = faker.datatype.number({
      max: this.is_verified ? 9999999 : 30,
    });

    return Array.from({ length: number }, () => {
      return {
        _id: faker.datatype.uuid(),
        userId:
          ALL_USERS[faker.datatype.number({ max: ALL_USERS.length - 1 })]._id,
        body: faker.lorem.paragraph(),
      };
    });
  }

  getRetweets() {
    const number = faker.datatype.number({
      max: this.is_verified ? 9999999 : 30,
    });

    return Array.from(
      { length: number },
      () => ALL_USERS[faker.datatype.number({ max: ALL_USERS.length - 1 })]._id
    );
  }

  getLikes() {
    const number = faker.datatype.number({
      max: this.is_verified ? 9999999 : 30,
    });

    return Array.from(
      { length: number },
      () => ALL_USERS[faker.datatype.number({ max: ALL_USERS.length - 1 })]._id
    );
  }

  generateTweet() {
    return {
      _id: faker.datatype.uuid(),
      tweet_body: faker.lorem.paragraph(),
      replies_count: this.repliesCount,
      retweet_count: this.retweetsCount,
      likes_count: this.likesCount,
      is_liked: this.isLiked,
      is_retweeted: this.isRetweeted,
      image_attached: Array.from(
        {
          length: faker.datatype.number({ min: 0, max: 4 }),
        },
        () => faker.image.abstract(null, null, true)
      ),
      user: getUser(this.selectedUser._id),
      likes: this.isLiked ? [...this.likes, this.selectedUserId] : this.likes,
      retweets: this.isRetweeted
        ? [...this.retweets, this.selectedUserId]
        : this.retweets,
      replies: this.replies,
    };
  }
}

const getUser = (userId) => {
  return ALL_USERS.find((user) => user._id === userId)?._id || null;
};

module.exports = Tweet;
