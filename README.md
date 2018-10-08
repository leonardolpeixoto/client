# Teravoz - Client
Cliente react para visualizar em real time as ligações que estão acontecendo, graças ao consumo do serviço fornecido pelo [server](https://github.com/leonardolpeixoto/teravoz). 

### Getting Started
Depois de clonarmos o projeto devemos instalar nossas dependências, você pode usar tanto o **npm**, quanto o **yarn**:

```shell
npm i
yarn
```
Para rodar nossa aplicação em modo de desenvolvimento devemos utilizar o comando:

```shell
npm start #yarn start
```
### Config
Para especificar o endereço do server edite o [arquivo](https://github.com/leonardolpeixoto/client/blob/master/src/socket/index.js) passando o mesmo como paramêtro para **openSocket**

### Prerequisites
Para o funcionamento da aplicação devemos [instalar](https://nodejs.org/en/download/) o node na versão 8.12.
