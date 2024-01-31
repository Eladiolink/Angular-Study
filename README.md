# Angular Study

Repositório dedicado a colocar meus códigos de estudo introdutório do Angular assim como também escrever breves insights de aulas.

## Estrutura básica do Angular

- **node_models:** Pasta de Dependências do projeto
- **src:** Local onde ficara os arquivos da aplicação
- **src/app:** pasta principal para os componentes, services e etc
- **componentes:** Sao divididos em TS,HTML,CSS E Testes

**observação:** Projetos independentes são o padrão do Angular desde o fim de 2023, logo para que o app.module.ts seja criado junto ao projeto tem que criar com o modo "no-standalone" segue um exemplo de comando:

```shell
ng new my-app --no-standalone
```

## Criando Componentes
- Utilizar o CLI
- Com o comando ng generate "nome"
- Para importar o componente basta utilizar o seu seletor em um HTML de outro componente

## Interpolação de dados
 
- A interpolação de dados e um recurso que vai nos ensinar a trabalhar com componentes do Angular
- Cria-se variáveis no arquivo .ts, dentro da classe, logo essas variáveis sao propriedades da classe.
- E então teremos acesso a estes dados no arquivo .html, o template
- A impressão e feita através de {{dado}}