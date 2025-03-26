FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
