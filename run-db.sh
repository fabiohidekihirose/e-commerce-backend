#!/bin/bash

docker network create home-decor || true

docker run --network home-decor --name postgres -v home-decor-db:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=home-decor-db -p 5432:5432 -d postgres
