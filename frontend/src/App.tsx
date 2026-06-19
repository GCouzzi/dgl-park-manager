import type { ReactElement } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AlterarCliente from './pages/AlterarCliente';
import AlterarDespesa from './pages/AlterarDespesa';
import AlterarEntrada from './pages/AlterarEntrada';
import AlterarSaida from './pages/AlterarSaida';
import AlterarServico from './pages/AlterarServico';
import AlterarTipoServico from './pages/AlterarTipoServico';
import AlterarUsuario from './pages/AlterarUsuario';
import AlterarVaga from './pages/AlterarVaga';
import AlterarVeiculo from './pages/AlterarVeiculo';
import CadastroCliente from './pages/CadastroCliente';
import CadastroDespesa from './pages/CadastroDespesa';
import CadastroModelo from './pages/CadastroModelo';
import CadastroSaida from './pages/CadastroSaida';
import CadastroServico from './pages/CadastroServico';
import CadastroTipoServico from './pages/CadastroTipoServico';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroVaga from './pages/CadastroVaga';
import CadastroVeiculo from './pages/CadastroVeiculo';
import EsqueceuSenha from './pages/EsqueceuSenha';
import HomepageAdministrador from './pages/HomepageAdministrador';
import HomepageFuncionario from './pages/HomepageFuncionario';
import ListarCliente from './pages/ListarCliente';
import ListarDespesa from './pages/ListarDespesa';
import ListarEntrada from './pages/ListarEntrada';
import ListarModelo from './pages/ListarModelo';
import ListarSaida from './pages/ListarSaida';
import ListarServico from './pages/ListarServico';
import ListarTipoServico from './pages/ListarTipoServico';
import ListarUsuario from './pages/ListarUsuario';
import ListarVaga from './pages/ListarVaga';
import ListarVeiculo from './pages/ListarVeiculo';
import Login from './pages/Login';
import ProcessoEntrada from './pages/ProcessoEntrada';
import RelatorioCarrosBanidos from './pages/RelatorioCarrosBanidos';
import RelatorioEntradasUsuarios from './pages/RelatorioEntradasUsuarios';
import RelatorioEntradasVeiculos from './pages/RelatorioEntradasVeiculos';
import RelatorioFinanceiro from './pages/RelatorioFinanceiro';
import RelatorioMediaSaida from './pages/RelatorioMediaSaida';
import RelatorioTotalUsuario from './pages/RelatorioTotalUsuario';
import { AuthProvider } from './auth/AuthContext';
import HomeRedirect from './auth/HomeRedirect';
import ProtectedRoute from './auth/ProtectedRoute';
import type { Role } from './config/navigation';


const ALL_ROLES: Role[] = ['funcionario', 'administrador'];
const ADMIN_ONLY: Role[] = ['administrador'];
const FUNCIONARIO_ONLY: Role[] = ['funcionario'];

function protectedPage(element: ReactElement, allowedRoles = ALL_ROLES) {
  return <ProtectedRoute allowedRoles={allowedRoles}>{element}</ProtectedRoute>;
}

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />

          <Route path="/homepage-administrador" element={protectedPage(<HomepageAdministrador />, ADMIN_ONLY)} />
          <Route path="/homepage-funcionario" element={protectedPage(<HomepageFuncionario />, FUNCIONARIO_ONLY)} />

          <Route path="/alterar-cliente" element={protectedPage(<AlterarCliente />)} />
          <Route path="/alterar-despesa" element={protectedPage(<AlterarDespesa />, ADMIN_ONLY)} />
          <Route path="/alterar-entrada" element={protectedPage(<AlterarEntrada />)} />
          <Route path="/alterar-saida" element={protectedPage(<AlterarSaida />)} />
          <Route path="/alterar-servico" element={protectedPage(<AlterarServico />)} />
          <Route path="/alterar-tipo-servico" element={protectedPage(<AlterarTipoServico />)} />
          <Route path="/alterar-usuario" element={protectedPage(<AlterarUsuario />, ADMIN_ONLY)} />
          <Route path="/alterar-vaga" element={protectedPage(<AlterarVaga />)} />
          <Route path="/alterar-veiculo" element={protectedPage(<AlterarVeiculo />)} />

          <Route path="/cadastro-cliente" element={protectedPage(<CadastroCliente />)} />
          <Route path="/cadastro-despesa" element={protectedPage(<CadastroDespesa />, ADMIN_ONLY)} />
          <Route path="/cadastro-modelo" element={protectedPage(<CadastroModelo />)} />
          <Route path="/cadastro-saida" element={protectedPage(<CadastroSaida />)} />
          <Route path="/cadastro-servico" element={protectedPage(<CadastroServico />)} />
          <Route path="/cadastro-tipo-servico" element={protectedPage(<CadastroTipoServico />)} />
          <Route path="/cadastro-usuario" element={protectedPage(<CadastroUsuario />, ADMIN_ONLY)} />
          <Route path="/cadastro-vaga" element={protectedPage(<CadastroVaga />)} />
          <Route path="/cadastro-veiculo" element={protectedPage(<CadastroVeiculo />)} />

          <Route path="/listar-cliente" element={protectedPage(<ListarCliente />)} />
          <Route path="/listar-despesa" element={protectedPage(<ListarDespesa />, ADMIN_ONLY)} />
          <Route path="/listar-entrada" element={protectedPage(<ListarEntrada />)} />
          <Route path="/listar-modelo" element={protectedPage(<ListarModelo />)} />
          <Route path="/listar-saida" element={protectedPage(<ListarSaida />)} />
          <Route path="/listar-servico" element={protectedPage(<ListarServico />)} />
          <Route path="/listar-tipo-servico" element={protectedPage(<ListarTipoServico />)} />
          <Route path="/listar-usuario" element={protectedPage(<ListarUsuario />, ADMIN_ONLY)} />
          <Route path="/listar-vaga" element={protectedPage(<ListarVaga />)} />
          <Route path="/listar-veiculo" element={protectedPage(<ListarVeiculo />)} />

          <Route path="/processo-entrada" element={protectedPage(<ProcessoEntrada />)} />
          <Route path="/relatorio-carros-banidos" element={protectedPage(<RelatorioCarrosBanidos />)} />
          <Route path="/relatorio-entradas-usuarios" element={protectedPage(<RelatorioEntradasUsuarios />)} />
          <Route path="/relatorio-entradas-veiculos" element={protectedPage(<RelatorioEntradasVeiculos />)} />
          <Route path="/relatorio-financeiro" element={protectedPage(<RelatorioFinanceiro />, ADMIN_ONLY)} />
          <Route path="/relatorio-media-saida" element={protectedPage(<RelatorioMediaSaida />)} />
          <Route path="/relatorio-total-usuario" element={protectedPage(<RelatorioTotalUsuario />)} />

          <Route path="*" element={<HomeRedirect />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}
