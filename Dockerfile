# Dockerfile

FROM node:16-alpine

RUN npm install -g pnpm


WORKDIR /app
COPY package.json pnpm-lock.yaml panda.config.ts postcss.config.cjs ./
RUN ls -la

RUN pnpm install -D @pandacss/dev && pnpm install -f

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["npm", "run", "static"]

## build image
## podman build . -t docker.io/sveltekit

## run image
## podman run -d -p 3000:3000 --name sveltekit-app docker.io/sveltekit