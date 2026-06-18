import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import BuscarCliente from './pages/BuscarCliente';
import BuscarDespesa from './pages/BuscarDespesa';
import BuscarEntrada from './pages/BuscarEntrada';
import BuscarSaida from './pages/BuscarSaida';
import BuscarServico from './pages/BuscarServico';
import BuscarTipoServico from './pages/BuscarTipoServico';
import BuscarUsuario from './pages/BuscarUsuario';
import BuscarVaga from './pages/BuscarVaga';
import BuscarVeiculo from './pages/BuscarVeiculo';
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/buscar-cliente" element={<BuscarCliente />} />
        <Route path="/buscar-despesa" element={<BuscarDespesa />} />
        <Route path="/buscar-entrada" element={<BuscarEntrada />} />
        <Route path="/buscar-saida" element={<BuscarSaida />} />
        <Route path="/buscar-servico" element={<BuscarServico />} />
        <Route path="/buscar-tipo-servico" element={<BuscarTipoServico />} />
        <Route path="/buscar-usuario" element={<BuscarUsuario />} />
        <Route path="/buscar-vaga" element={<BuscarVaga />} />
        <Route path="/buscar-veiculo" element={<BuscarVeiculo />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cadastro-despesa" element={<CadastroDespesa />} />
        <Route path="/cadastro-modelo" element={<CadastroModelo />} />
        <Route path="/cadastro-saida" element={<CadastroSaida />} />
        <Route path="/cadastro-servico" element={<CadastroServico />} />
        <Route path="/cadastro-tipo-servico" element={<CadastroTipoServico />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/cadastro-vaga" element={<CadastroVaga />} />
        <Route path="/cadastro-veiculo" element={<CadastroVeiculo />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/homepage-administrador" element={<HomepageAdministrador />} />
        <Route path="/homepage-funcionario" element={<HomepageFuncionario />} />
        <Route path="/listar-cliente" element={<ListarCliente />} />
        <Route path="/listar-despesa" element={<ListarDespesa />} />
        <Route path="/listar-entrada" element={<ListarEntrada />} />
        <Route path="/listar-modelo" element={<ListarModelo />} />
        <Route path="/listar-saida" element={<ListarSaida />} />
        <Route path="/listar-servico" element={<ListarServico />} />
        <Route path="/listar-tipo-servico" element={<ListarTipoServico />} />
        <Route path="/listar-usuario" element={<ListarUsuario />} />
        <Route path="/listar-vaga" element={<ListarVaga />} />
        <Route path="/listar-veiculo" element={<ListarVeiculo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/processo-entrada" element={<ProcessoEntrada />} />
        <Route path="/relatorio-carros-banidos" element={<RelatorioCarrosBanidos />} />
        <Route path="/relatorio-entradas-usuarios" element={<RelatorioEntradasUsuarios />} />
        <Route path="/relatorio-entradas-veiculos" element={<RelatorioEntradasVeiculos />} />
        <Route path="/relatorio-financeiro" element={<RelatorioFinanceiro />} />
        <Route path="/relatorio-media-saida" element={<RelatorioMediaSaida />} />
        <Route path="/relatorio-total-usuario" element={<RelatorioTotalUsuario />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
}
