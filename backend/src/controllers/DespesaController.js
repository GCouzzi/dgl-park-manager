import { DespesaService } from "../services/DespesaService.js";

class DespesaController {
  
  static async findAll(req, res, next) {
    DespesaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    DespesaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    DespesaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    DespesaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    DespesaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { DespesaController };