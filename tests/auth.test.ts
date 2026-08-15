import request from "supertest";
import app from "../app";

describe("Auth Flow", () => {
  let token: string;

  it("should reject login with wrong password", async () => {
    const res = await request(app)
      .post("/api/staff/login")
      .send({ email: "amir@yest.com", password: "wrongpassword" });

    expect(res.status).toBe(401);
    expect(res.body.message).toMatch(/invalid/i);
  });

  it("should login with correct credentials and return token", async () => {
    const res = await request(app)
      .post("/api/staff/login")
      .send({ email: "amir@yest.com", password: "pass123" });

    expect(res.status).toBe(200);
    expect(res.body.data.token).toBeDefined();
    expect(typeof res.body.data.token).toBe("string");
    token = res.body.data.token;
  });

  it("should reject protected route without token", async () => {
    const res = await request(app).get("/api/students");
    expect(res.status).toBe(401);
  });

  it("should allow protected route with valid token", async () => {
    const res = await request(app)
      .get("/api/students")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
