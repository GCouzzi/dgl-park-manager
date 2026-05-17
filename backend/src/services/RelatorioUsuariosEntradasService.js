import sequelize from "../config/database-connection.js";
import { QueryTypes } from "sequelize";

class RelatorioUsuariosEntradasService {
  static async generate(req) {
    let { dataInicial, dataFinal } = req.query;

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

    // A relação é: Entrada -> Usuario (entrada.usuarioId = usuario.id)
    // JOIN entre entradas e usuarios para agrupar por nome do usuário
    const query = `
      SELECT u.nome_usuario AS usuario, COUNT(e.id) AS entradas
      FROM entradas e
      INNER JOIN usuarios u ON e.usuario_id = u.id
      WHERE e.horario BETWEEN :dataInicial AND :dataFinal
      GROUP BY u.id, u.nome_usuario
      ORDER BY entradas DESC
    `;

    const replacements = {
      dataInicial: inicio.toISOString(),
      dataFinal: fim.toISOString()
    };

    const resultados = await sequelize.query(query, {
      replacements,
      type: QueryTypes.SELECT
    });

    return resultados;
  }
}

export { RelatorioUsuariosEntradasService };
