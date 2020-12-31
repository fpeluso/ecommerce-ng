# base image
### STAGE 1: Build ###
FROM node:12 AS build

# set working directory
WORKDIR /app/
COPY package.json /app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install


# Install nginx
#RUN apt-get update
#RUN apt-get install nginx -y
#COPY nginx.conf /etc/nginx/sites-available/default
#RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf


# install and cache app dependencies
COPY ./ /app/
ARG configuration=production 
RUN yarn build  -- --output-path=./dist/out --configuration $configuration

### STAGE 2: Run ###
FROM nginx:1.15 as net
COPY --from=build /app/dist/out /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# forward request and error logs to docker log collector
#RUN ln -sf /dev/stdout /var/log/nginx/access.log \
#	&& ln -sf /dev/stderr /var/log/nginx/error.log

# EXPOSE 80
# start app
#CMD ["nginx"]