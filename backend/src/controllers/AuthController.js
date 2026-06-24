import { DespesaService } from "../services/DespesaService.js";
import { AuthService } from "../services/AuthService.js";

class AuthController {
  
  static async login(req, res, next) {
    AuthService.loginMatches(req)
        .then(objs => res.json(objs))
        .catch(next);
  }

}

export { AuthController };