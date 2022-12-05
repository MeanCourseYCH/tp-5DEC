import { findAll,store } from '../controllers/user.controller';
module.exports = (app: any) => {
  app.get("/customers", findAll);
  app.post("/customers", store);
}