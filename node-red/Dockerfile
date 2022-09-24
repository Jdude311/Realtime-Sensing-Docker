FROM nodered/node-red

# Install plugins
RUN npm i node-red-node-mongodb

# Copy settings
# WORKDIR /data/
# COPY . .

COPY settings.js /data/settings.js
# COPY flows_cred.json /data/flows_cred.json
COPY flows.json /data/flows.json
