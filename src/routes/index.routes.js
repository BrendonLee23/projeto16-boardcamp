import { Router } from "express"
/* import receitasRouter from "./receitas.routes.js" */
import gamesRouter from "./games.routes.js";
import customersRouter from "./customers.routes.js";

const router = Router()
/* router.use(receitasRouter) */
router.use(gamesRouter)
router.use(customersRouter)

export default router;
