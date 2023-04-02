FROM node:18-alpine

# Create app directory
RUN mkdir -p /usr/app/
WORKDIR /usr/src/app

# copy everything from source to image
COPY ./ ./

# npm install
RUN npm install

# expose port of the container
EXPOSE 3000

CMD ["npm", "start"]