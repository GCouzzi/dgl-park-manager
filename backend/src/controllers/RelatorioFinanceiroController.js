import { RelatorioFinanceiroService } from "../services/RelatorioFinanceiroService";

class RelatorioFinanceiroController {
  
  static async generate(req, res, next) {
    RelatorioFinanceiroService.generate(req)
      .then(objs => res.json(objs))
      .catch(next);
  }
}

export { RelatorioFinanceiroController };