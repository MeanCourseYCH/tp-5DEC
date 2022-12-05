import { findAll, store, destroy, update, search } from '../controllers/user.controller';
module.exports = (app: any) => {
	app.get("/customers", findAll);
	app.post("/customers", store);
	app.delete("/customers/:id", destroy);
	app.put("/customers/:id", update);
	app.get("/customers/search",search);

}