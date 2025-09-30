# Etapa 1: Build (compilar o Main.java)
FROM openjdk:17-jdk-slim AS build
WORKDIR /app
COPY Main.java /app
RUN javac Main.java

# Etapa 2: Runtime (rodar a aplicação)
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/Main.class /app
CMD ["java", "Main"]