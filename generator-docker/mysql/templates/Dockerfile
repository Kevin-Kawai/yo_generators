FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=pass
ENV MYSQL_ROOT_HOST=%

# build with "docker build --tag mysql_custom ."
# run using "docker run --rm -dit -p 3306:3306 --name mysql_custom mysql_custom"
# then connect with if using from WSL "mysql -h127.0.0.1 -uroot -ppass --protocol=tcp"
# you can remove --protocol=tcp if you are using an older version of mysql