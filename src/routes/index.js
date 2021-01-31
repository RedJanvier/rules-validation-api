import { Router } from "express";
import RuleControllers from "../controllers";
import RulesMiddlewares from "../middlewares";

const router = Router();

router.get("/", RuleControllers.getInfo);
router.post(
  "/validate-rule",
  RulesMiddlewares.validateInput,
  RuleControllers.validateRule
);

export default router;
