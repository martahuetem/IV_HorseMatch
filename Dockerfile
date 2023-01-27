FROM node:bullseye-slim

#creo el directorio /home/app
RUN mkdir -p /home/app

#indico que el directorio de trabajo es /home/app (creado anteriormente)
#por lo tanto, en dicho directorio es donde se van a ejecutar los comandos del Dockerfile
WORKDIR /home/app

#copio los archivos package*.json y package-lock.json
COPY package*.json ./

#instalo pnpm de forma global e instalo las dependencias que he 
#especificado en el archivo package.json
RUN npm install -g pnpm && pnpm install

#establezco que al iniciar el contenedor se ejecuten los comando make y make test
ENTRYPOINT ["make", "test"]

