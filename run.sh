docker-compose down
docker build -t api-server-image ./api
docker-compose up --build -d