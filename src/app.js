import express from "express";
import { addLogger } from "./utils/logger.js";

const app = express();

app.use(addLogger);

app.get("/testing", (req, res) => {
  req.logger.info("ingresando a un proceso importante");

  req.logger.info(
    "PASO 1: " +
      new Date().toLocaleTimeString() +
      new Date().getUTCMilliseconds()
  );
  try {
    gdfshjsdjgsjdfgjsdgfjhdsgfgjhsgjhsgdf();
  } catch (error) {
    req.logger.warn({
      message: error.message,
    });
  }

  req.logger.info(
    "PASO 2: " +
      new Date().toLocaleTimeString() +
      new Date().getUTCMilliseconds()
  );

  try {
    sdfsdgsfd();
  } catch (error) {
    req.logger.error({
      message: error.message,
      stack: JSON.stringify(error.stack, null, 2),
    });
    return res
      .status(400)
      .json({ msg: "something important went wrong no continue" });
  }

  res.send({ message: "fin del proceso heavy exito!!!" });
});

app.listen(8080, () => console.log("http://localhost:8080/"));
