#!/bin/bash

docker build -t home-decor-backend .

docker run --network home-decor --name home-decor-backend -e DATABASE_URL=postgresql://postgres:postgres@postgres:5432/home-decor-db -e PORT=8000 -p 8000:8000 home-decor-backend