import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@amariug/errors-and-middlewares";

import { indexRouter } from "./routes";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(indexRouter);

app.all("*", async (res, req) => {
  throw new NotFoundError("The requested URL was not found.");
});

app.use(errorHandler);

export { app };
