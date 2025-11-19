import request from "supertest";
import app, { initDb } from "../app.js";
import Task from "../src/models/task.js";

beforeAll(async () => {
  await initDb();
});

test("Create task", async () => {
  const res = await request(app)
    .post("/tasks")
    .send({ title: "Test Task", description: "Sample" });

  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe("Test Task");
});
