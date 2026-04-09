import { ModeloService } from "../services/ModeloService.js";

class ModeloController {
  
  static async findAll(req, res, next) {
    ModeloService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async create(req, res, next) {
    ModeloService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    ModeloService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { ModeloController };