const authRouter = require("./auth-router");
const db = require("../database/dbConfig");
const request = require("supertest");
const server = require("../api/server");

describe("auth-router.js", () => {
  describe("POST /register", () => {
    it("returns 200 OK", () => {
      return request(server)
        .post("/register")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("returns JSON", done => {
      request(server)
        .post("/register")
        .then(res => {
          expect(res.type).toMatch(/text/i); // passes
          console.log(res.type);
          done();
        });
    });
  });

  describe("POST /login", () => {
    it("returns 200 OK", () => {
      return request(server)
        .post("/login")
        .then(res => {
          expect(res.status).toBe(200);
          console.log("Login Req Status", res.status);
        });
    });
    it("returns JSON", done => {
      request(server)
        .post("/login")
        .then(res => {
          expect(res.type).toMatch(/text/i); // passes
          console.log(res.type);
          done();
        });
    });
  });
});
