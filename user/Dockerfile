FROM node:18

WORKDIR /app

COPY package*.json ./

EXPOSE 3004:3004

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
