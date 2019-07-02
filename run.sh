#!/bin/sh

echo ===============================
echo =  Hello from run.sh
echo ===============================

# turn on bash's job control
# set -m

# Start the API and put it in the background
node ./src/server/api_server.js &

# TODO: Start the Admin
node ./src/admin/admin_panel.js

# now we bring the primary process back into the foreground
# and leave it there
fg %1
