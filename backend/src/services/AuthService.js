import { Usuario } from "../models/Usuario.js";

class AuthService {

    static async loginMatches(req) {
        const { nomeUsuario, senha } = req.body;

        const usuario = await Usuario.findOne({
            where: {
                nomeUsuario,
                senha
            }
        });

        return {
            existe: !!usuario,
            tipoUsuario: usuario?.tipoUsuario ?? null
        };
    }
    
}

export { AuthService };