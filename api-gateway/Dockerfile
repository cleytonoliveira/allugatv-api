FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

EXPOSE 3001:3001

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
