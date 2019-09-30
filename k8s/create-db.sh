#! /bin/bash

if [ ! -s db.sql ]; then
    echo "db.sql required"
    exit -1
fi

POD_NAME=$(kubectl get pods -l app=mysql -o jsonpath={'.items[0].metadata.name'})

kubectl cp db.sql $POD_NAME:/var/lib/mysql

kubectl exec $POD_NAME -- sh -c "\
mysql -uroot -ppassword -e \"GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;\" 
mysql -uroot -ppassword -e \"CREATE USER 'user1'@'localhost' IDENTIFIED BY 'password';\"
mysql -uroot -ppassword -e \"CREATE USER 'user1'@'%' IDENTIFIED BY 'password';\"
mysql -uroot -ppassword -e \"GRANT ALL PRIVILEGES ON *.* TO 'jae'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;\" 
mysql -uroot -ppassword -e 'CREATE DATABASE IF NOT EXISTS Test';
mysql -uroot -ppassword -e \"USE Test\";"

kubectl exec $POD_NAME -- sh -c "mysql -uroot -ppassword Test < /var/lib/mysql/db.sql"

kubectl exec $POD_NAME -- sh -c "rm -fv /var/lib/mysql/db.sql"