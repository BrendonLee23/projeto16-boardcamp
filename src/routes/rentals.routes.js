import { Router } from "express";
import { validateRentals } from "../middlewares/validadeRentals.middleware.js";
import { rentalsSchema } from "../schemas/rentals.schema.js";
import { deleteRentals, finalizeRentals, getRentals, postRentals } from "../controllers/rentals.controller.js";


const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals", validateRentals(rentalsSchema), postRentals);
rentalsRouter.post("/rentals/", finalizeRentals);
rentalsRouter.delete("/rentals/", deleteRentals);

export default rentalsRouter;
