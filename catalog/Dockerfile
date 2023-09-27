FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

EXPOSE 3002:3002

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
