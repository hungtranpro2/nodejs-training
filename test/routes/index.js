const request = require("supertest");
const chai = require("chai");
const app = require("../../index");
const expect = chai.expect;

describe("Routes: Index", () => {
  describe("GET /", () => {
    it("returns the API status", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .end((err, res) => {
          const expected = { status: "NTask API" };
          expect(res.body).to.eql(expected);
          done(err);
        });
    });
  });
});
