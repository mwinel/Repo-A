import request from "supertest";

import { app } from "../../app";

it("Returns `Hello World!` message.", async () => {
  const resp = await request(app).get("/").expect(200);

  expect(resp.body.message).toEqual('Hello World!')
});
