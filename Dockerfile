FROM node:14-alpine as build

# adds deps for node-gyp: add if native modules are used
# RUN apk update && apk upgrade \
#   && apk --no-cache add --virtual builds-deps build-base python

# set app basepath
WORKDIR /app

# add app dependencies
COPY package.json  package.json
COPY package-lock.json  package-lock.json

RUN npm i

# copy all app files
COPY . .

# compile typescript and build all production stuff
RUN npm run build

# remove dev dependencies that are not needed in production
RUN npm prune --production

# start new image for lower size
FROM node:14-alpine

# create use with no permissions
#RUN addgroup -g 101 -S app && adduser -u 100 -S -G app -s /bin/false app

# set app basepath
ENV HOME=/home/app

# copy production complied node app to the new image
COPY --from=build /app $HOME/node/
#RUN chown -R app:app $HOME/*

# run app with low permissions level user
#USER app
WORKDIR $HOME/node

ENV PORT=32456
EXPOSE 32456

ENV NODE_ENV=production
ENV STATIC_ROOT=$HOME/node/public
ENV MONGO_URL=mongodb+srv://devuser:qwerty123@cluster0.n3gup.mongodb.net/devdb

CMD ["node", "./build"]