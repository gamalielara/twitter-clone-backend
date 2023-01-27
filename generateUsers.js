const fakerModule = require("@faker-js/faker");
const faker = fakerModule.faker;

const USER_ID = [];

const generateUsers = (number) => {
  const users = [];
  const NUMBER_OF_USERS = faker.datatype.number(number);

  for (let i = 0; i < NUMBER_OF_USERS; i++) {
    const data = {
      _id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      display_name: faker.name.fullName(),
      followers_count: Math.round(
        faker.datatype.number({ min: 0, max: 1, precision: 0.00001 }) *
          faker.datatype.number({ min: 1000000 })
      ),
      profile_picture: faker.internet.avatar(),
      get is_verified() {
        return this.followers_count > 1000000;
      },
    };
    users.push(data);
    USER_ID.push(data._id);
  }

  return users;
};

const ALL_USERS = generateUsers(faker.datatype.number({ min: 99, max: 9999 }));

module.exports = { generateUsers, ALL_USERS, USER_ID };
