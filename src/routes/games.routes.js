import { Router } from "express";
import { gamesSchema } from "../schemas/games.schema.js";
import { getGames, postGames } from "../controllers/games.controller.js";
import { validateGames } from "../middlewares/validateGames.middleware.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames);
gamesRouter.post("/games", validateGames(gamesSchema), postGames);

export default gamesRouter;