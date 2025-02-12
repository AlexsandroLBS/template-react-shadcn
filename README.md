
# React Template

Este repositório é um **template básico** para iniciar projetos React com TypeScript. Ele inclui as principais bibliotecas e uma estrutura de pastas inicial que facilita o desenvolvimento de aplicações React.

## Como usar

Você pode criar um novo projeto utilizando este template com o comando `degit`. Basta rodar o seguinte comando:

```bash
npx degit seu-usuario/template-react-shadcn <nome-novo-projeto>
```

Onde `seu-usuario` é o seu nome de usuário no GitHub e `my-react-template` é o nome do repositório do template. O comando irá copiar todos os arquivos para a pasta `novo-projeto` (ou outro nome que você escolher).

Após isso, basta navegar para o diretório do novo projeto e instalar as dependências:

```bash
cd novo-projeto
npm install
```

## Dependências

Este template já vem com as seguintes bibliotecas configuradas para uso:

- **React**: Biblioteca principal para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript, adicionando tipagem estática.
- **React Router**: Biblioteca para navegação entre páginas da sua aplicação.
- **@tanstack/react-query**: Para gerenciamento de estado de dados assíncronos, fácil de usar para fazer requisições e manipular cache.
- **Tailwind CSS**: Framework utilitário para construção de layouts responsivos e rápidos.
- **Zod**: Biblioteca de validação de esquemas para dados e formulários.
- **Shadcn UI (se usado)**: Um sistema de componentes de UI de alta qualidade para React (opcional dependendo de suas necessidades).
- **PostCSS e Autoprefixer**: Ferramentas de build para otimizar o CSS.

### Comandos úteis

- **Desenvolver localmente**:
  Para rodar o servidor de desenvolvimento, utilize o comando:

  ```bash
  npm start
  ```

- **Construir o projeto**:
  Para gerar os arquivos de produção, use:

  ```bash
  npm run build
  ```

## Estrutura do Projeto

A estrutura de pastas do template é organizada da seguinte forma:

```
/src
  /components   # Componentes reutilizáveis da UI
  /contexts     # Contextos do React para gerenciamento de estado global
  /hooks        # Hooks customizados
  /pages        # Páginas principais da aplicação
  /styles       # Estilos globais (utilizando Tailwind)
  /utils        # Funções utilitárias
/public         # Arquivos públicos (ícones, imagens, etc.)
```

## Personalização

Este template está configurado para ser facilmente personalizável. Você pode adicionar ou remover dependências, modificar a estrutura de pastas conforme a necessidade, e ajustar as configurações do `tailwind.config.js` e outros arquivos de configuração de build para otimizar o projeto conforme os requisitos do seu time.
