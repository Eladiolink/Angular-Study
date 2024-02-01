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
 
- A interpolação de dados é um recurso que irá nos ensinar a trabalhar com componentes do Angular
- Cria-se variáveis no arquivo .ts, dentro da classe, logo essas variáveis sao propriedades da classe.
- E então teremos acesso a estes dados no arquivo .html, o template
- A impressão é feita através de {{dado}}

## CSS no Angular

São feitos de duas maneiras:

- **Global:** Utilizando o arquivo styles.css, que fica em src;
- **Scoped:**: Estilo a nível de componente,que é criado quando se usa o generate.

## Compartilhando Dados

- Na chamada do componente o nome do dado que será recebido com a seguinte sintaxe [dado]
- E no código .ts do componente filho se utiliza o decorator @input que tem como papel entregar o dado para o template.

## Diretivas

- Diretivas pode ser usado em vários contextos no angular, ou seja podem realizar diversas funções no sistema, como aplicar estilos em um elemento por exemplo.

- As diretivas no Angular sempre começam com ng, exemplo: ngTalCoisa.

## Renderização Condicional

- Utilizamos a diretiva ngif para exibir um conteúdo por meio de algum condicional.

- Os valores podem ser dinâmicos (propriedades), mas podem ser feitas outros tipos de comparação.

- Há a possibilidade de imprimir um cenário para validação de false, com o **else**

# Eventos