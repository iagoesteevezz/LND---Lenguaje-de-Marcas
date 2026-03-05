# Simple Dockerfile for static HTML/JS site
FROM nginx:alpine

# copy all files to nginx html directory
COPY . /usr/share/nginx/html

# expose default port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]
