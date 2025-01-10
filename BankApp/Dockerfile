# Étape 1 : Construire l'application Java
FROM maven:3.9.9-eclipse-temurin-21-alpine AS build
# Répertoire de travail dans l'image
WORKDIR /app

# Copier le fichier pom.xml pour récupérer les dépendances
COPY pom.xml .

# Télécharger les dépendances Maven
RUN mvn dependency:go-offline -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true

# Copier le code source
COPY src ./src

# Construire l'application avec Maven
RUN mvn clean package -DskipTests

# Étape 2 : Créer l'image exécutable
FROM openjdk:21-jdk

# Répertoire où l'artefact Jar sera stocké
WORKDIR /app

# Copier le fichier Jar construit depuis l'étape précédente
COPY --from=build /app/target/BankApp-0.0.1-SNAPSHOT.jar app.jar

# Exposer le port de l'application
EXPOSE 8080

# Lancer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]

