FROM node:slim
WORKDIR /build
COPY . /build
RUN npm install
EXPOSE 8000
CMD node index.js
