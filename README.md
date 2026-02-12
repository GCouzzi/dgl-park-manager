# Sistema de Gestão de Estacionamento

## Visão Geral

O sistema de gestão de estacionamento tem como objetivo principal organizar e controlar o uso das vagas de um estacionamento, bem como o registro de veículos, a oferta de serviços adicionais e o cálculo automático de cobrança, proporcionando maior eficiência operacional, controle financeiro e melhor experiência para os usuários e administradores.

A aplicação foi projetada para atender estacionamentos de pequeno e médio porte, permitindo o controle do fluxo de entrada e saída de veículos, a identificação por meio da placa, o gerenciamento da ocupação das vagas e a liberação automática após o encerramento do uso. Além disso, o sistema possibilita a oferta e o gerenciamento de serviços internos prestados aos veículos, como limpeza, polimento e calibragem, integrando esses serviços ao processo de cobrança final.

O sistema é estruturado em três módulos principais: o módulo de **entrada**, responsável pelo registro do veículo, escolha da vaga e marcação do horário de entrada; o módulo de **serviços**, que gerencia os serviços oferecidos e vinculados aos veículos durante sua permanência no estacionamento; e o módulo de **saída**, encarregado do cálculo do valor a ser pago com base no tempo de permanência e nos serviços utilizados, além da liberação da vaga.

A aplicação poderá ser utilizada em ambiente computacional local ou com suporte à internet, possibilitando acesso via navegador por usuários autorizados. O sistema contará com componentes on-line, como o armazenamento e processamento das informações, e poderá ser expandido para integração com outros sistemas, como meios de pagamento digitais ou sistemas de controle externo, caso necessário.

Limitações e Exclusões: As seguintes funcionalidades **não** serão atendidas nesta versão do sistema:

**Reconhecimento Automático de Placas**: A identificação da placa será realizada por seleção manual pelo operador, não havendo integração com câmeras para leitura automática nesta fase do projeto.

**Controle Direto de Hardware**: O sistema realizará a "liberação" lógica da vaga no banco de dados, mas não acionará eletronicamente a abertura física de cancelas ou portões.

Dessa forma, o produto visa otimizar a gestão do estacionamento, reduzir erros manuais, aumentar o controle administrativo e fornecer informações relevantes por meio de relatórios gerenciais e financeiros.

### Descrição do cliente

**Nome:** E-Estacionamento

**Endereço:** Avenida Nossa Senhora da Penha, nº 1025, Praia do Canto, Vitória – ES, CEP 29055-131

**Telefone:** (27) 3345-8721

**Proprietário:** José Carlos Ceccon Neto

### Descrição dos usuários
Os principais usuários desse sistema são as pessoas que trabalham nos setores operacional e administrativo de um estacionamento, incluindo administradores e atendentes.

### Administradores
O grupo de administradores pode envolver gerentes ou o próprio proprietário do estacionamento, que utilizam o produto como forma de controle e acompanhamento das atividades desempenhadas na empresa.

### Atendentes
Esse grupo envolve as pessoas que atuam no atendimento aos clientes do estacionamento, essas responsáveis pelo recebimento e, como no caso de estacionamentos de menor porte,  responsáveis por guiar os clientes às vagas designadas e auxiliar os mesmos ao manobrar os veículos. São os principais usuários do sistema visto que atuam no setor operacional, fazendo com que naturalmente despendem maior tempo no uso do sistema quando comparado aos administradores.

