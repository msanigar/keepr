# Keepr v0

docker build -f Dockerfile -t keepr .

docker run -d -p 8081:8081 -p 8080:8080 --name keepr keepr
