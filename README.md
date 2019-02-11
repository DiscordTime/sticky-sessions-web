# Sticky Sessions Web

[![CircleCI](https://circleci.com/gh/DiscordTime/sticky-sessions-web.svg?style=svg)](https://circleci.com/gh/DiscordTime/sticky-sessions-web)

> Sticky Sessions is an application that helps medium to large teams to share and store their thoughts through digital-like retrospective sessions. This is the repository of the Web client.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Docker Setup

There is also the option to develop and build the application using Docker.

The application's [Dockerfile](Dockerfile) is a multi-stage Dockerfile. It has a base development image that can be used in a dev environemt, this base image contains all projects's dependencies. The production image only has the application and necessary libs to serve the app in a production environment.

It is possible to build the production image with the following command:

```
docker build -t sticky-web-client-prod .
```

In order to run the application you can eith run:

```
docker run -it -p 80:80 --rm sticky-web-client-prod
```

If you wish to build the development image you only need to add the target flag with the image name:

```
docker build --target dev -t sticky-web-client-dev .
```

And to use ir for development you can bind a volume to the project folder and add the HOST variable to enable Hot Reload:

```
docker run -it -p 8080:8080 -v $(pwd):/app -e HOST=0.0.0.0 --rm sticky-web-client-dev
```