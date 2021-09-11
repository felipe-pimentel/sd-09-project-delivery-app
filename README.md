# Delivery App

## Considerações Iniciais

Este é um fork de um projeto em grupo que foi desenvolvido durante o curso de Desenvolvimento Web Full Stack na [Trybe](https://www.betrybe.com/).

Meu grupo também era composto pelos colegas [Luciano Lodi](https://github.com/lrlodi), [Marcus Lima Witthoeft](https://github.com/marcusWittho) e [Antonio Arieiro Jr](https://github.com/antonioarieiro).

Todo o código que é de nossa autoria está disponibilizado nas pastas ```/front-end/src``` e ```/back-end/src```. **Todo código além dos encontrados nessas pastas citadas são de autoria do time de instrução da Trybe.**

## Contexto do Projeto

### O enunciado apresentado originalmente:

<blockquote>
  A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação, sobretudo via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

  Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

  Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio, pois gera muita manutenção, dona Tereza procurou a **sua equipe de pessoas desenvolvedoras** com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. O aplicativo precisa:

  - Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes:
    1. A pessoa cliente, que compra da lista de produtos;
    1. A pessoa vendedora, que aprova, prepara e entrega;
    1. A pessoa administradora, que gerencia quem usa o aplicativo;
  - Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
  - Funcionar em tempo real: as telas de pedidos/detalhes do pedido devem ser atualizadas em tempo real, à medida que essas interações acontecem. Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos sem que ela precise atualizar a página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido também atualizadas em tempo real, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

  Sua equipe, que já possui uma boa experiência com desenvolvimento, em pouco tempo apresentou um [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=0%3A1) e um [Diagrama de ER](./assets/readme/eer.png) conforme imagem:

  <img src="/assets/readme/eer.png" />

  A ideia da sua equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

  A proposta encantou, mas dona Tereza quer ver o negócio em ação! Ela está disposta a pagar por um MVP do projeto e vocês fecharam o negócio com um prazo de 10 dias para entrega.

  Agora é mãos à obra! Vamos começar?
</blockquote>
<br>

## Tecnologias e Ferramentas Utilizadas

<blockquote>
  <h3>Front-End</h3>
  <hr>
  <p>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS logo" height=60>
    <img src="https://raw.githubusercontent.com/devicons/devicon/7a4ca8aa871d6dca81691e018d31eed89cb70a76/icons/javascript/javascript-original.svg" alt="JavaScript logo" height=60>
    <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/css3/css3-original.svg" alt="Axios logo" height=60>
    <img src="https://raw.githubusercontent.com/devicons/devicon/7a4ca8aa871d6dca81691e018d31eed89cb70a76/icons/figma/figma-original.svg" alt="Figma logo" height=60>
  </p>
</blockquote>
<blockquote>
  <h3>Back-End</h3>
  <hr>
  <p>
    <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/nodejs/nodejs-original.svg" alt="Node.js logo" height=60>
    <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/express/express-original.svg" alt="Express.js logo" height=60>
    <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/sequelize.svg" alt="Sequelize logo" height=60>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL logo" height=60>
    <img src="https://jwt.io/img/pic_logo.svg" alt="JSON Web Tokens logo" height=60>
    <img src="https://raw.githubusercontent.com/gilbarbara/logos/f4c8e8b933aa80ce83b6d6d387e016bf4cb4e376/logos/socket.io.svg" alt="Socket.io logo" height=60>
  </p>
</blockquote>
<blockquote>
  <h3>Outros</h3>
  <hr>
  <p>
    <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/npm/npm-original-wordmark.svg" alt="NPM logo" height=60>
    <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg" alt="ESLint logo" height=60>
    <img src="https://raw.githubusercontent.com/devicons/devicon/7a4ca8aa871d6dca81691e018d31eed89cb70a76/icons/trello/trello-plain.svg" alt="Trello logo" height=60>
    <img src="https://raw.githubusercontent.com/devicons/devicon/7a4ca8aa871d6dca81691e018d31eed89cb70a76/icons/slack/slack-original.svg" alt="Slack logo" height=60>
  </p>
</blockquote>
