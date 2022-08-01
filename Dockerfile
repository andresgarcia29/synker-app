FROM node:lts as builder

WORKDIR /app

COPY . .

RUN npm install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN npm run generate

FROM nginx:alpine

# Copy the config files
COPY .nginx/ /etc/nginx/
# Clears the static files
RUN rm -rf /usr/share/nginx/html
# Copy the static web content
COPY --from=builder /app/dist/ /usr/share/nginx/html
# Suggests to bind port 80 to any port of the host system
EXPOSE 80