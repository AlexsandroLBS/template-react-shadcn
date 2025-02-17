# Etapa 1: Build do aplicativo React
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar arquivos de dependência e instalar
COPY package*.json ./
RUN npm install

# Copiar todo o código e gerar a build
COPY . .
RUN npm run build

# Etapa 2: Servir os arquivos estáticos com Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Remover arquivos padrão do Nginx
RUN rm -rf ./*

# Copiar a build do estágio anterior para o Nginx
COPY --from=builder /app/build .

# Expor a porta padrão do Nginx
EXPOSE 80

# Iniciar o Nginx no modo foreground
CMD ["nginx", "-g", "daemon off;"]