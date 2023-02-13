#!bin/bash
tar --exclude='package-lock.json' --exclude='node_modules' --exclude='*docker*' --exclude='dist' --exclude='*.sh' -zcvf CRMBE.tgz *

docker build -t crm-be .

rm CRMBE.tgz

docker compose up -d

