#!/usr/bin/env bash

docker rm -f $(docker ps -a -q -f "name=realtime-sensing*")
docker volume rm $(docker volume ls -q -f "name=realtime-sensing*" )
docker-compose -f docker-compose.yml -p realtime-sensing build
