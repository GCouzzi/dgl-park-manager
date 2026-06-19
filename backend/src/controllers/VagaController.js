import { VagaService } from "../services/VagaService.js";

class VagaController {

  static async findAll(req, res, next) {
    VagaService.findAll()
      .then(objs => res.json(objs))
      .catch(next);
  }

  static async findAllLivres(req, res, next) {
    VagaService.findAllLivres()
      .then(objs => res.json(objs))
      .catch(next);
  }

  static async findByPk(req, res, next) {
    VagaService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

  static async create(req, res, next) {
    VagaService.create(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

  static async update(req, res, next) {
    VagaService.update(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

  static async delete(req, res, next) {
    VagaService.delete(req)
      .then(obj => res.json(obj))
      .catch(next);
  }

}

export { VagaController };