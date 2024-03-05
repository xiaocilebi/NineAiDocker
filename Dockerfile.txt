# service
FROM node:18.19.1-alpine

WORKDIR /src

COPY nine/* .

RUN npm config set registry https://registry.npmmirror.com

RUN npm install -g pm2 pnpm

RUN pnpm install --registry=https://registry.npmmirror.com

RUN npm install -g pm2 pnpm

EXPOSE 9520

CMD ["pnpm", "start", "--no-daemon"]
