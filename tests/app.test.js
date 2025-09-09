const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ci-cd-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe("API Tests", () => {
  it("GET /health → should return OK", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("OK");
  });

  it("POST /users → should create user", async () => {
    const res = await request(app).post("/users").send({ name: "Alice", email: "alice@test.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Alice");
  });
});
