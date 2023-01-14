#!/bin/bash
source variables.sh

docker network \
  create ${DOCKER_NET_NAME} \
  --subnet ${DOCKER_SUBNET} \
  --ip-range=${DOCKER_IP_RANGE} \
  --gateway=${DOCKER_GATEWAY} \
  -d bridge