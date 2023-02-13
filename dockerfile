FROM node:latest

COPY ["CRMBE.tgz", "/CRMBE.tgz"]
COPY [".env", "/CRMBE/.env"]

RUN tar -xzf CRMBE.tgz --directory /CRMBE && rm CRMBE.tgz

RUN chmod -R 777 /CRMBE

WORKDIR /CRMBE

RUN yarn

RUN yarn build

CMD ["yarn","start:prod"]