const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username", "password", "department");
  // you can take out .select entirely and it will default selecting all
  // dont forget to add department field in here after you add it from the migrations
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  // when you use async dont need .then or .catch (es7) (newest way)
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
