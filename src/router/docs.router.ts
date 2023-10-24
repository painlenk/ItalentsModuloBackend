import swaggerUi from "swagger-ui-express";
import {} from "../../";
import express from "express";

import swaggerConfig from "../../swagger.json";
//criar o swagger document

const router = express.Router();
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerConfig));

export default router;
