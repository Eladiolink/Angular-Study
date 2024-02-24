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

- Pode-se ativar eventos nos componentes para disparar algum método
- Um evento clásssico que utilizamos muito é o click
- A sintaxe é: (click)="algumFuncao()"
- Os métodos ficam na **classe**
- Esse recurso é muito utilizado para acessar API

# Emitir Eventos

- Pode-se comunicar eventos de um componente filho para o pai
- Para isso vamos precisar do *@Output*, que vai fazer a saída do evento do componente filho
- *Na tag de invocação do componente no template*, escolhemos um método para executar quando o evento for emitido.

- Ex: *(emit)="onEmit()"*

# Renderização de Listas

- Importante usar loop para listas
- Para isso é necessário usar a propriedade com os itens da lista
- No template do componente utiliza-se o **ngFor*
- Ex: **ngFor="let item of itens"*

# Interfaces (By TypeScript)

- Um entidade pode ser modelada como uma *interface*
- Isso vai tornar nosso código mais simples ao longo do programa
- Padroniza ele e facilita a manutenção

# Pipe operators 

- Os pipe operators sao recursos para trabalhar com strings nos templates.
- Podemos realizar *diversas funções* como deixar o texto em CAIXA ALTA.

- A sintaxe é: **{{dado | algumPipeOperator }}**

# Two way data binding

- O *TWO WAY DATA BINDING* é um recurso muito interessante para trabalho com formulários
- Basicamente conseguimos **alterar props** e o template com o preenchimento de inputs
- É necessário importar o **FormsModule** no componente principal
- E também declarar o **ngModel** no input, além de preencher também o atributo name, todos com o mesmo valor

# Services 

- O **Service** é outra parte fundamental da arquitetura do Angular
- Geralmente ficam as **requisições para API's** que utilizamos no projeto
- Precisamos criar o service com: *ng generate service nome*
- Importar no componente e iniciar no **construtor**
- Depois é possível acessar os métodos dele

# Angular Router 

- Cria-se um novo arquivo para declarar as rotas da aplicação
- Nele importa-se os módulos **RouterModule** e **Routes**
- Após a definição estas rotas precisam ser importadas em **app.modules.ts**
- E por fim no *template* principal cria-se as rotas
- E substitui os componentes por **<router-outle>**

# Requisições HTTP

- Utiliza-se os services para fazer as requisições HTTP
- Necessário importar os pacotes: HttpClient e HttpHeaders
- É necessário inicializar o módulo HttpClientModule no app.module.ts