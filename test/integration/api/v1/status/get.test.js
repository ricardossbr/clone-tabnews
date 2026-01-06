test("GET to api/v1/status should be returned 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();
  const updateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(responseBody.update_at);
  expect(responseBody.dependeces.database.version).toEqual("16.0");
});
