FROM alpine:3.14
ENV DB_SERVER=my-postgres
ENV POSTGRES_PASSWORD=mysecretpassword
RUN apk add --update postgresql-client
WORKDIR /db_scripts
COPY ./*.sql .
COPY ./*.sh .
ENTRYPOINT [ "./run-all-sql.sh" ]