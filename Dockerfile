#
# Angular Start
# Builds a docker image to run the Frontend service for Angular Start
#

# Pull alpine base image
FROM alpine:3.2

# Install Nginx
RUN apk add --update nginx && \
    rm -rf /var/cache/apk/*

# Bundle app build
COPY ./dist /angular-start

WORKDIR /angular-start

# Add nginx config - overwrite bundled nginx.conf
COPY nginx.conf /etc/nginx/

# Volumes
VOLUME ["/etc/nginx"]

# Expose ports
EXPOSE 80

CMD nginx
