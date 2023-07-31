import { Router } from "express";
import { customersSchema } from "../schemas/customers.schema.js";
import { validateCustomers } from "../middlewares/validateCustomers.middleware.js";
import { editCustomers, getCustomers, getCustomersById, postCustomers } from "../controllers/customers.controller.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomersById);
customersRouter.post("/customers", validateCustomers(customersSchema), postCustomers);
customersRouter.put("/customers/:id", validateCustomers(customersSchema), editCustomers);

export default customersRouter;
