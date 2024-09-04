# service
FROM node:18.19.1-alpine

WORKDIR /src

COPY nine/dist dist

COPY nine/public public

COPY nine/templates templates

COPY nine/package.json package.json

COPY nine/pm2.conf.json pm2.conf.json

RUN npm config set registry https://registry.npmmirror.com

RUN npm install -g pm2 pnpm

RUN pnpm set registry https://registry.npmmirror.com

RUN pnpm add sharp@0.33.1

RUN rm -rf node_modules && pnpm install --registry=https://registry.npmmirror.com

CMD ["pnpm", "start","--no-daemon"]
