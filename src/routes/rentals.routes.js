import { Router } from "express";


const rentalsRouter = Router();

rentalsRouter.get("/rentals", getCustomers);
rentalsRouter.post("/rentals/", getCustomersById);
rentalsRouter.post("/rentals", validateCustomers(customersSchema), postCustomers);
rentalsRouter.delete("/rentals/", validateCustomers(customersSchema), editCustomers);

export default rentalsRouter;
