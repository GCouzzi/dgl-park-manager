import sequelize from "../config/database-connection.js";
import { QueryTypes } from "sequelize";

class RelatorioEntradasVeiculosService {
  static async generate(req) {
    let { dataInicial, dataFinal, tipoVeiculo } = req.query;

    if (!dataInicial) {
      throw "A data inicial deve ser informada!";
    }

    if (!dataFinal) {
      throw "A data final deve ser informada!";
    }

    const inicio = new Date(dataInicial);
    if (isNaN(inicio.getTime())) {
      throw "Data inicial inválida!";
    }

    const fim = new Date(dataFinal);
    if (isNaN(fim.getTime())) {
      throw "Data final inválida!";
    }

    if (inicio > fim) {
      throw "A data inicial não pode ser posterior à data final!";
    }

    // Ajustar fim para incluir o dia inteiro
    fim.setHours(23, 59, 59, 999);

    // A relação é: Entrada -> Vaga (vaga.tipo = 'CARRO' ou 'MOTO')
    // JOIN entre entradas e vagas para agrupar por tipo de vaga
    let query = `
      SELECT v.tipo AS tipo, COUNT(e.id) AS entradas
      FROM entradas e
      INNER JOIN vagas v ON e.vaga_id = v.id
      WHERE e.horario BETWEEN :dataInicial AND :dataFinal
    `;

    const replacements = {
      dataInicial: inicio.toISOString(),
      dataFinal: fim.toISOString()
    };

    if (tipoVeiculo) {
      query += ` AND v.tipo = :tipoVeiculo`;
      replacements.tipoVeiculo = tipoVeiculo.toUpperCase();
    }

    query += ` GROUP BY v.tipo ORDER BY entradas DESC`;

    const resultados = await sequelize.query(query, {
      replacements,
      type: QueryTypes.SELECT
    });

    return resultados;
  }
}

export { RelatorioEntradasVeiculosService };
