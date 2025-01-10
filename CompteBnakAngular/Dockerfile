# Étape 1 : Construction de l'application Angular
FROM node:20.18.1-alpine3.21 AS build

# Répertoire de travail dans l'image
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour l'installation des dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install --force

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Servir l'application Angular
FROM nginx:alpine

# Copier les fichiers construits vers le répertoire par défaut de Nginx
COPY --from=build /app/dist/Spike/ /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]

