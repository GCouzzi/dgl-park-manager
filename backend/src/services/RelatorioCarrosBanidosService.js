import { Veiculo } from "../models/Veiculo.js";

class RelatorioCarrosBanidosService {
  static async generate(req) {
    let { modelo } = req.body;

    let veiculos;
    let total;
    if(!modelo){
      veiculos = await Veiculo.findAll({
        include: { all: true, nested: true },
        where: {
          banido: true
        }
      });
  
      total = await Veiculo.count({
        where: {
          banido: true
        }
      });
    } else{
      veiculos = await Veiculo.findAll({
        include: { all: true, nested: true },
        where: {
          banido: true,
          '$modelo.nome$': 'Civic'
        }
      });

      total = await Veiculo.count({
        include: { all: true, nested: true },
        where: {
          banido: true,
          '$modelo.nome$': 'Civic'
        },
        distinct: true,
        col: 'veiculo.id'
      });
    }

    return {carrosBanidos: veiculos, totalCarrosBanidos: total};
  }
}

export { RelatorioCarrosBanidosService };
