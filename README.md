# Antes de iniciar - Correções no código da última aula

## 1. Atualizar o ID do recurso

Deixamos a chamada de API apontando para um recurso inexistente para forçar um `HTTP Status 404` na `Response`.

## 2. Uso da `div`

No nosso código atual, logo depois de modelar os dados a partir do JSON, chamamos `div = post.renderFrom(div)`. Há um erro nesta parte, e é o motivo pelo qual na aula passada  se pressionarmos o botão pela segunda vez, recebíamos este erro no console:

```
TypeError: Cannot set properties of undefined (setting 'innerHTML')
    at renderError (app.js:26:19)
    at app.js:20:9
```

### Correção (duas opções)

**Opção A**: Remover a reatribuição. Substituir 
 - `div = post.renderFrom(div)`
por
 - `post.renderFrom(div)`

**Opção B**: Retornar o contâiner ao final do método `renderFrom()`. Adicionar na última linha antes de sair do escopo da função
 - `return container`


## 3. Propriedade do título

Ainda dentro do método `renderFrom()`, estamos criando um elemento `pTitle` para conter o título, mas estamos chamando `this.title`, uma propriedade que não existe. Modificar:
 - `pTitle.textContent = this.titulo`
para
 - `pTitle.textContent = this.title`


# Como desenvolver o desafio

1. Montem as mesmas equipes que farão na CP2: 
  - Entre 2 e 3 integrantes por equipe.

2. Criem um novo repositório para este projeto:
  - Preferencialmente não ser a mesma pessoa que montou o repositório na CP1.
  - Adicionem os colaboradores
  - Repositório público
  - Adicionem um README com o repositório

3. Clonem e abram o projeto no VSCode

4. Criem um aquivo `app.js`
  
5. Criem um arquivo `index.html`
  - Podem utilizar o mesmo HTML do projeto que está no GitHub Pages como base
  - Façam pequenas modificações conforme necessário

6. Como referência usem [este repositório](https://github.com/profpauladenz/exercicio-servidores-estaticos/tree/develop) para consulta, na branch `develop`

7. Façam APENAS o commit inicial na `main` com os arquivos acima
  - Em seguida cada integrante faz um branch para si

8. Com o setup terminado, iniciem o desafio:


# Desafio: Implementação de nova API

Vamos utilizar 3 endpoints diferentes:
1. https://catfact.ninja/fact
2. https://dog.ceo/api/breeds/image/random
3. https://www.boredapi.com/api/activity

Cada integrante escolhe um endpoint e trabalha no seu branch, seguindo os passos abaixo:

## Passos

1. Teste o endpoint escolhido no Postman e analise o objeto JSON que vem na Response.

2.  Modele os dados utilizando uma classe, num novo arquivo. Mesmo processo que fizemos anteriormente com a classe `Post`.

3. Use o método `fetch()` para buscar os dados e transformá-los numa instância da classe criada.

4. Renderize a resposta e mostre dentro do HTML.

### Observações

- Não é preciso fazer tratamento de erros
- Não é preciso publicar no GitHub Pages

## Finalização

- Abram um Pull Request para cada integrante e façam a resolução de conflitos, se houverem.

## Entrega

- Link do **repositório GitHub**

## Dicas

* Comece pelo Postman. Descubra exatamente quais chaves o JSON contém.
* Faça o Data Model antes de renderiza com a DOM.
* Um commit a cada etapa, com mensagens descritivas.

