import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroSaida() {
  usePageTitle("Saída");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/cadastro-saida">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="saida" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Registrar Saída">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <select className="form-select" id="entrada" defaultValue="Selecione o veículo">
                      <option disabled>Selecione o veículo</option>
                      <option value="1">ABC-1234</option>
                      <option value="2">DEF-5678</option>
                      <option value="3">GHI-9012</option>
                    </select>
                    <label htmlFor="entrada">
                      <i className="bi bi-car-front-fill me-2"></i>
                      Entrada (Placa)
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="number" className="form-control" id="desconto" placeholder="Desconto" step="0.01" min="0" />
                    <label htmlFor="desconto">
                      <i className="bi bi-percent me-2"></i>
                      Desconto
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control-plaintext" id="dataSaida" placeholder="Data Saída" readOnly />
                    <label htmlFor="dataSaida">
                      <i className="bi bi-calendar-check-fill me-2"></i>
                      Data Saída
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="tipoPagamento" defaultValue="Selecione o tipo">
                      <option disabled>Selecione o tipo</option>
                      <option value="debito">Débito</option>
                      <option value="credito">Crédito</option>
                      <option value="dinheiro">Dinheiro</option>
                      <option value="pix">Pix</option>
                    </select>
                    <label htmlFor="tipoPagamento">
                      <i className="bi bi-credit-card-fill me-2"></i>
                      Tipo de Pagamento
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="status" defaultValue="Selecione o status">
                      <option disabled>Selecione o status</option>
                      <option value="pago">Pago</option>
                      <option value="nao_pago">Não Pago</option>
                    </select>
                    <label htmlFor="status">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Status
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <textarea className="form-control" placeholder="Observações" id="observacoes"></textarea>
                    <label htmlFor="observacoes">
                      <i className="bi bi-chat-left-text-fill me-2"></i>
                      Observações
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control-plaintext" id="criador" placeholder="Criador" readOnly />
                    <label htmlFor="criador">
                      <i className="bi bi-person-fill me-2"></i>
                      Criador
                    </label>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-success w-100">
                      <i className="bi bi-save me-2"></i>
                      Salvar
                    </button>
                  </div>
                  <div className="col-12">
                    <button type="reset" className="btn btn-warning w-100">
                      <i className="bi bi-x-circle me-2"></i>
                      Limpar
                    </button>
                  </div>
                </div>
              
            </PageCard>
          </form>
        </section>
      </div>
    </main>
    </AppShell>
  );
}
