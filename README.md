# :heavy_dollar_sign: Desafio  Frontend Challenge

Desafio Frontend, um web app para cálculo de a antecipação de uma transação. Possibilita com que o usuário manipule dados de entrada para tomada de decisão baseado nos resultados providos pela aplicação.

> Aplicação rodando no [Vercel](https://simule-bay.vercel.app/)


💭 Features principais:
- [ ] Gráfico com diferenças liquidas em relação a data inicial
- [ ] Lista de dias customizada para consulta


💡 Updates:

18 set 2022:
- [ ] Testes e2e

## 📋 Instruções

Como instalar esse projeto:

- Faça um clone deste repositório;
- Na pasta raiz do projeto, rode o comando "yarn" no terminal para instalar os pacotes de dependencias;
- Na pasta raiz do projeto, rode o comando "yarn start" no terminal para rodar o projeto;
- No seu navegador, abra o link indicado no terminal.


## 💻 Tecnologias

Algumas das principais tecnologias utilizadas:

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
- Typescript;
- NextJS;
- Estilização com styled-components.

## 🧠 Pontos de Melhoria

Alguns dos principais pontos que quero melhorar no projeto:

- Estudar e implementar o SWR. Vi que seria a maneira ideal para fazer a requisição da API e utilizar o cache do Next JS;
- Com o item acima, fazer um Provider para os dados vindos da requisição, tornando de fácil acesso por toda a aplicação e evitando "prop drilling";
- Ainda com o primeiro item, implementar o carregamento de mais produtos quando em mobile;
- Refatorar alguns componentes em componentes menores;
- Implementar o react-tostify, para que seja avisado quando um produto for inserido no carrinho;
- Implementação de testes. Refatorar os testes e2e para quem os elementos sejam selecionados pelo atributo "data-cy";
- Landing page;
- Apertar "enter" para concluir a busca e fechar a barra da mesma;
- Mudar a lógica dos botões "Anterior" e "Próxima" para que mude de segmento(3 em 3 páginas) e não de um em um, como já faz a numeração, para tornar a navegação mais ágil e fluida;
- Na página do produto, feratorar o "ContainerRight", dividindo em componentes menores e com responsabilidade única;
- Aprimorar a maneira como a responsividade trablha, quando o tamanho da página é alterado.


Sugestões e dicas são muito bem vindas! Obrigado! 🤓 [mottaluizantonio@gmail.com](mottaluizantonio@gmail.com)

## 🔗 Uteis

> [Figma guide](https://www.figma.com/file/gByBxI9GBHKUjXRtO2fFh2/28%2F10-%F0%9F%96%A5-%F0%9F%93%B1---Wine-Test---WEB-%26-APP?node-id=680%3A6449)


> [API Rest](https://documenter.getpostman.com/view/10015622/UVJiiuHi#fe849253-c47a-492f-a860-08350296c570)
