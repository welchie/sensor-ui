FROM node:14-alpine
COPY public/ ./public/
COPY src/ ./src/
COPY package.json . 
RUN npm install

CMD ["npm","start"]