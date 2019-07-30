FROM node:latest

WORKDIR /app/

RUN npm i -g serve

COPY package*.json ./
RUN npm install

RUN npm run build

COPY . .

CMD ["npm", "start"]