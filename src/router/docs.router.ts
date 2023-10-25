import swaggerUi from "swagger-ui-express";
import {} from "../../";
import express from "express";

//criar o swagger config
import swaggerConfig from "../../swagger.json";

const router = express.Router();
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerConfig));

export default router;
