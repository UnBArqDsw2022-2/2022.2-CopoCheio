# Políticas de contribuição

As políticas de contribuição são essenciais para a padronização e boas práticas no versionamento do projeto, o mesmo     irá auxiliar à todos da equipe a se organizar quanto suas contribuições,
manter um padrão adequado para as contribuições e assegurar de que quando for preciso o as contribuições serão facilmente rastreáveis. 

## Política de Branchs

Para a criação de novas branchs, será utilizada uma adaptação do modelo do [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). O padrão seguirá a seguinte constituição, tendo um prefixo de acordo ao tipo de alteração proposto, seguido de uma descrição de até 4 palavras, sendo separado por hífen e <strong>descritos em inglês</strong>.

As branchs serão baseados na seguinte estrutura:

```
{prefixo}/{descricao}-{em}-{4}-{palavras}
```

### Exemplos:

#### Funcionalidades

> Para a criação de novas funcionalidades, as branchs deverão utilizar o seguinte padrão de nomeclatura. Exemplo:
> 
>   ```
>   feature/user-autentication-and-login
>   ```

#### Tópicos

> Para a pequenas alterações e ajustes, tais como criação ou alteração de label, as branchs deverão utilizar o seguinte padrão de nomeclatura. Exemplo:
> 
>   ```
>   topic/homepage-label-translate
>   ```

#### Hotfix

> Para a criação de novas branchs para correção no projeto, as branchs deverã o utilizar o seguinte padrão de nomeclatura. Exemplo:
> 
>   ```
>   hotfix/broken-images-on-signout
>   ```

#### Docs

> Para a criação e atualização de documentos, as branchs deverão utilizar o seguinte padrão de nomeclatura. Exemplo:
> 
>   ```
>   docs/cause-effect-diagram
>   ```

## Política de Commits

Os commits serão escritos <strong>em inglês</strong> com a primeira palavra sendo um verbo no <strong>imperativo<strong> e utilizaremos a política de commits seguindo o que foi definido pelo [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Os commits serão baseados na seguinte estrutura:

```
{tipo}{(escopo)}: {mensagem do commit}
```

> *Obs: O escopo não é obrigatório mas sua presença ajuda a entender o que foi alterado.*

### Exemplos:


#### Feat

Quando há adição de funcionalidades, por menores que sejam.

> Um commit onde é adicionado uma lista de ingredientes em uma página do front-end...
>
>    ```
>    feat(front-end): add list of ingredients on the drink recipes
>    ```

#### Fix

Quando há correção de funcionalidades.

> Um commit onde é corrigido um bug no back-end onde a lista de ingredientes possui valores inválidos
>
>    ```
>    fix(back-end): fixes list of invalid ingredients values
>    ```

#### Chore

Quando é executado uma tarefa que não é nem adição de funcionalidade e nem correção.
Geralmente se considera quando há alterações em arquivos de configurações.

> Um commit onde é ajustado alguma configuração no docker-compose.yml
>
>   ```
>   chore: adjusts name of back-end container on docker-compose.yml
>   ```

#### Docs

Quando ocorre a criação ou alguma alteração em um arquivo de documentação.

> Um commit onde é ajustado um atributo no MER.
>
>   ```
>   docs(Modelagem): changes entity relationship between drinks and ingredients
>   ```