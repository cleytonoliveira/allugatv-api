FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

EXPOSE 3003:3003

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
