import request from "supertest";
import app from "../app";

describe("Expense Module", () => {
  let token: string;

  beforeAll(async () => {
    const res = await request(app)
      .post("/api/staff/login")
      .send({ email: "amir@yest.com", password: "pass123" });

    token = res.body.data.token;
  });

  it("should create an expense with valid data", async () => {
    const res = await request(app)
      .post("/api/expenses")
      .set("Authorization", `Bearer ${token}`)
      .send({
        date: "2026-08-15",
        item: "Test Expense from Jest",
        amount: 5000,
        approvedBy: "Jest Bot",
      });

    expect(res.status).toBe(201);
    expect(res.body.data.item).toBe("Test Expense from Jest");
    expect(res.body.data.amount).toBe(5000);
    expect(res.body.data.approvedBy).toBe("Jest Bot");
  });

  it("should list expenses including the new one", async () => {
    const res = await request(app)
      .get("/api/expenses")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);

    const found = res.body.data.find(
      (e: any) => e.item === "Test Expense from Jest",
    );
    expect(found).toBeDefined();
    expect(found.amount).toBe(5000);
  });
});
