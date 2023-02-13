#!/bin/bash
tar --exclude='package-lock.json' --exclude='node_modules' --exclude='*docker*' --exclude='dist' --exclude='*.sh' -zcvf CRMBE.tgz *
docker buildx create --name overatevntech-builder --driver docker-container --bootstrap
docker buildx use overatevntech-builder
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t overatevntech/crm-backend:0.0.01 -f Dockerfile --push .

rm CRMBE.tgz