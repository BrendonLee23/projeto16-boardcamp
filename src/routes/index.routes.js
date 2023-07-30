import { Router } from "express"
/* import receitasRouter from "./receitas.routes.js" */
import gamesRouter from "./games.routes.js";

const router = Router()
/* router.use(receitasRouter) */
router.use(gamesRouter)

export default router