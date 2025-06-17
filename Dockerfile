# builder stage
FROM node:current-alpine3.20 AS builder

# change dir to /app
WORKDIR /app

# copy these two files so they go to same layer
COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile

# copy everything else
COPY . .

# build the application
RUN yarn build

# Production Stage
FROM node:current-alpine3.20 as production

# change working dir to /app
WORKDIR /app

# copy dist folder & package.json & lock file
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# install serve
RUN yarn global add serve

# expose the port
EXPOSE 5173

# serve the application
CMD ["serve","-s","dist","-l","5173"]