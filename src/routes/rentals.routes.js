import { Router } from "express";
import { validateRentals } from "../middlewares/validadeRentals.middleware";
import { rentalsSchema } from "../schemas/rentals.chema";
import { deleteRentals, finalizeRentals, getRentals, postRentals } from "../controllers/rentals.controller";


const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals", validateRentals(rentalsSchema), postRentals);
rentalsRouter.post("/rentals/", finalizeRentals);
rentalsRouter.delete("/rentals/", deleteRentals);

export default rentalsRouter;
