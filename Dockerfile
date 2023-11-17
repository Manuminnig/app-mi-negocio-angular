FROM node:21-alpine 

#directorio de trabajo para la aplicación
WORKDIR /usr/src/app


COPY package*.json .
RUN npm install
COPY . .   

EXPOSE 4200

CMD ["npm" , "run" , "start:k8s" , "--" , "--host=0.0.0.0"]