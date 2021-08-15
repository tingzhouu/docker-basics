FROM node:12-alpine
COPY . my-wonderful-app
RUN echo "running command!" && cd my-wonderful-app && npm install
CMD ["node", "my-wonderful-app/app.js"]
