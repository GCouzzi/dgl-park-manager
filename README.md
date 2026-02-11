# Sistema de Gestão de Estacionamento

## Visão Geral

O sistema de gestão de estacionamento tem como objetivo principal organizar e controlar o uso das vagas de um estacionamento, bem como o registro de veículos, a oferta de serviços adicionais e o cálculo automático de cobrança, proporcionando maior eficiência operacional, controle financeiro e melhor experiência para os usuários e administradores.

A aplicação foi projetada para atender estacionamentos de pequeno e médio porte, permitindo o controle do fluxo de entrada e saída de veículos, a identificação por meio da placa, o gerenciamento da ocupação das vagas e a liberação automática após o encerramento do uso. Além disso, o sistema possibilita a oferta e o gerenciamento de serviços internos prestados aos veículos, como limpeza, polimento e calibragem, integrando esses serviços ao processo de cobrança final.

O sistema é estruturado em três módulos principais: o módulo de entrada, responsável pelo registro do veículo, escolha da vaga e marcação do horário de entrada; o módulo de serviços, que gerencia os serviços oferecidos e vinculados aos veículos durante sua permanência no estacionamento; e o módulo de saída, encarregado do cálculo do valor a ser pago com base no tempo de permanência e nos serviços utilizados, além da liberação da vaga.

A aplicação poderá ser utilizada em ambiente computacional local ou com suporte à internet, possibilitando acesso via navegador por usuários autorizados. O sistema contará com componentes on-line, como o armazenamento e processamento das informações, e poderá ser expandido para integração com outros sistemas, como meios de pagamento digitais ou sistemas de controle externo, caso necessário.

Dessa forma, o produto visa otimizar a gestão do estacionamento, reduzir erros manuais, aumentar o controle administrativo e fornecer informações relevantes por meio de relatórios gerenciais e financeiros.

### Abrangência e sistemas relacionados

O Sistema de Gestão de Estacionamento é uma solução projetada para informatizar o controle de pátios de veículos, abrangendo desde a recepção do cliente até o encerramento de sua estadia e faturamento.

**Funcionalidades:** O sistema fornecerá as seguintes funcionalidades principais:
- **Controle de Acesso:** Registro de entrada e saída de veículos com identificação manual da placa de veículos cadastrados e marcação automatizada de horários. 
- **Gestão de Ocupação:** Monitoramento em tempo real do status das vagas (livres e ocupadas). 
- **Gestão de Serviços Adicionais:** Cadastro e vinculação de serviços extras (lavagem, polimento, calibragem) à estadia do veículo.
- **Cálculo de Cobrança:** Processamento automático do valor final a ser pago, considerando o tempo de permanência (tarifa fracionada ou diária) e os serviços adicionais consumidos.
- **Relatórios Gerenciais:** Geração de demonstrativos financeiros e operacionais para auxiliar na tomada de decisão. 
- **Controle de Usuários:** Autenticação e controle de acesso para operadores e administradores via interface web.
  
**Limitações e Exclusões:** As seguintes funcionalidades não serão atendidas nesta versão do sistema:
- **Processamento de Pagamentos Eletrônicos (Gateway):** O sistema calculará o valor total, mas não realizará a transação financeira (cartão de crédito/débito) diretamente. O pagamento será processado por meios externos (maquininhas de cartão) e apenas registrado no sistema como "pago".
- **Reconhecimento Automático de Placas (OCR):** A identificação da placa será realizada por seleção manual pelo operador, não havendo integração com câmeras para leitura automática nesta fase do projeto.
- **Controle Direto de Hardware (Automação de Cancelas):** O sistema realizará a "liberação" lógica da vaga no banco de dados, mas não acionará eletronicamente a abertura física de cancelas ou portões.
  
**Sistemas Relacionados e Interações:** O produto funcionará majoritariamente como uma aplicação independente no que tange à lógica de negócios do estacionamento. No entanto, sua arquitetura prevê as seguintes interações básicas:
- **Navegador Web:** O sistema irá interagir com navegadores padrão de mercado para prover a interface ao usuário final.
- **Serviço de Banco de Dados:** A aplicação dependerá de um sistema gerenciador de banco de dados (SGBD) para a persistência e recuperação segura das informações de veículos e financeiro.


### Descrição do cliente
O cliente deste projeto é uma instituição responsável pela administração de um estacionamento, atuando no controle do uso de vagas e na prestação de serviços automotivos aos seus usuários. Trata-se de uma organização que necessita de um sistema informatizado para organizar o fluxo de entrada e saída de veículos, gerenciar a ocupação das vagas e realizar a cobrança de forma correta e padronizada.

O sistema será utilizado por funcionários autorizados do estacionamento, como operadores e administradores, que necessitam de acesso rápido e confiável às informações para realizar as atividades diárias. O cliente busca uma solução simples, intuitiva e segura, capaz de atender às necessidades operacionais e administrativas do estacionamento, bem como de fornecer relatórios que auxiliem na tomada de decisão.

### Descrição dos usuários
Os principais usuários desse sistema são as pessoas que trabalham nos setores operacional e administrativo de um estacionamento, incluindo administradores e atendentes.

### Administradores
O grupo de administradores pode envolver gerentes ou o próprio proprietário do estacionamento, que utilizam o produto como forma de controle e acompanhamento das atividades desempenhadas na empresa.

### Atendentes
Esse grupo envolve as pessoas que atuam no atendimento aos clientes do estacionamento, essas responsáveis pelo recebimento e, como no caso de estacionamentos de menor porte,  responsáveis por guiar os clientes às vagas designadas e auxiliar os mesmos ao manobrar os veículos. São os principais usuários do sistema visto que atuam no setor operacional, fazendo com que naturalmente despendem maior tempo no uso do sistema quando comparado aos administradores.

