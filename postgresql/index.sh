#!/bin/bash

source variables.sh

docker stop ${POSTRES_CONTAINER_NAME} || true
docker rm ${POSTRES_CONTAINER_NAME} || 

echo "### STARTING eeeeePOSTGRES... ###"
docker run \
  --name ${POSTRES_CONTAINER_NAME} \
  --network=host \
  -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} \
  -p ${POSTGRES_PORT}:${POSTGRES_PORT} \
  -d postgres

# set -e

# export PGPASSWORD=$POSTGRES_PASSWORD;
# psql -v ON_ERROR_STOP=1 --username "sexadapt" --dbname "sex_adapt" <<-EOSQL
#   CREATE USER sexadapt WITH PASSWORD 'sexadapt';
#   CREATE DATABASE sex_adapt;
#   GRANT ALL PRIVILEGES ON DATABASE sex_adapt TO sexadapt;
# EOSQL

echo "### POSTGRES RUNNING IN PORT: ${POSTGRES_PORT} ###"