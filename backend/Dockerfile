FROM node:17-alpine
WORKDIR /backend
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
COPY . ./
EXPOSE 3001
CMD ["npm", "start"]
ENV PGHOST=my-postgres
ENV PGPASSWORD=mysecretpassword
ENV PGPORT=5432
ENV PGDATABASE=postgres
ENV PGUSER=postgres



