import test, { expect } from "@playwright/test";
import { blogPost } from "../helpers/fixtures";

test("response for post", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  console.log("data: ", data);
  expect(data.id).toBe(1);
});

test("create post", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: blogPost.title,
        body: blogPost.body,
        userId: blogPost.userId,
      },
    }
  );
  expect(response.status()).toBe(201);
  const result = await response.json();
  console.log("result posting: ", result);
  expect(result).toHaveProperty("id");
});
