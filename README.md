# Lista Telefônica

## Descrição
Este projeto é uma aplicação de Lista Telefônica desenvolvida com **AngularJS** para a camada de lógica e interação do frontend e **Bootstrap** para o design e estilo responsivo. Utiliza a arquitetura **Model-View-Controller (MVC)**, o que permite uma separação clara das responsabilidades do código, facilitando a manutenção e escalabilidade.

A aplicação se conecta a uma **API RESTful** criada em um arquivo `server.js`, que gerencia os dados dos contatos. O **AngularJS** é responsável por fazer chamadas HTTP para esta API, permitindo a integração entre as telas e o backend.

Os usuários podem adicionar, visualizar, editar e remover contatos telefônicos em uma interface amigável e intuitiva, interagindo com a API

## Tecnologias Utilizadas
- **Arquitetura MVC**: Organização do código em Model (dados), View (interface do usuário), e Controller (lógica de controle).
- **HTML**: Estruturação das páginas.
- **CSS**: Customização e estilos adicionais.
- **Bootstrap**: Framework CSS para estilização e criação de layouts responsivos.
- **Node.js/Express**: API RESTful usada para manipulação dos dados.
- **AngularJS**: Framework JavaScript para construção de aplicações dinâmicas no frontend.

## Estrutura do Projeto
O projeto segue a arquitetura MVC, com a separação clara de responsabilidades:

- **Model**: Gerencia os dados dos contatos (nome, telefone, etc.). No AngularJS, os modelos são responsáveis por fornecer dados ao controller.
  
- **View**: A camada de apresentação, onde o HTML e o Bootstrap são usados para exibir a lista telefônica de forma organizada e responsiva.

- **Controller**: Controla a interação do usuário e as operações da aplicação, incluindo adicionar e remover contatos da lista.

### Diretórios
- `js/`: Contém os arquivos principais do AngularJS, incluindo controllers e services.
- `view/`: Páginas HTML que representam a interface de usuário.
- `styles/`: Arquivos estáticos, como CSS e JavaScript externos (Bootstrap).
  
## Funcionalidades
- Adicionar novo contato (nome e número de telefone).
- Excluir contatos da lista.
- Exibir todos os contatos cadastrados de forma clara e organizada.
- Conexão com API RESTful para persistência de dados.

## Instalação e Configuração
Siga os passos abaixo para configurar o projeto localmente:

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/lista-telefonica.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd lista-telefonica
    ```
3. Instale as dependências do backend (Node.js):
    ```bash
    npm install
    ```

4. Inicie o servidor Node.js:
    ```bash
    node server.js
    ```

5. Abra o arquivo `index.html` em seu navegador para visualizar a aplicação. O frontend fará as requisições à API para manipulação dos dados.

## Uso
1. Ao abrir a aplicação, você verá a lista de contatos.
2. Use o formulário de cadastro para adicionar um novo contato, clicando no botão "Novo Contato".
3. A lista será atualizada automaticamente com o novo contato.
4. Para excluir um contato, utilize os botão de "Apagar Contato" na tela principal.
5. As operações de adicionar e excluir interagem diretamente com a API RESTful para manter os dados sincronizados.