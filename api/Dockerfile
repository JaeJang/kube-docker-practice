FROM node:alpine
WORKDIR '/app'
COPY ./pacakge.json ./
RUN npm install
COPY . .
CMD ["npm", "run"]