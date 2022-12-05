import { findAll } from '../controllers/user.controller';
module.exports = (app: any) => {
  app.get("/customers", findAll);
}