const Users = require("./auth-router-model");
const db = require("../database/dbConfig");


describe("auth router model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
    // find DB_ENV in the package.json under test
  });

  // test for create
  describe("add()", () => {
    it("should add a user into the db", async () => {
      await Users.add({
        username: "lauradondiego",
        password: "cats5"
      });
      let users = await db("users");
      console.log(users);
      // expect(users).toHaveLength(0); // fails purposely
      expect(users).toHaveLength(1); // passes
      expect(users[0].username).toBe("lauradondiego"); // passes
      console.log(users[0].username);
    });
  });
});
