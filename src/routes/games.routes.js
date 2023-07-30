import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { gamesSchema } from "../schemas/games.schema.js"
import { getGames } from "../controllers/games.controller.js"

const gamesRouter = Router()

receitasRouter.get("/games", getGames)
/* receitasRouter.get("/receitas/:id", getReceitaById)
receitasRouter.post("/receitas", validateSchema(receitaSchema), createReceita)
receitasRouter.delete("/receitas/:id", deleteReceita)
receitasRouter.put("/receitas/:id", validateSchema(receitaSchema), editReceitaById) */



export default gamesRouter