#! /bin/bash

# CircleCI/Saucelabs e2e testing script

# Download and unzip sauce connect
wget https://saucelabs.com/downloads/sc-latest-linux.tar.gz
tar -xzf sc-latest-linux.tar.gz

# Lauch sauce connect and create folder when done
cd sc-*-linux
nohup ./bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -f ~/sc_ready &

# Wait for tunnel to be ready
while [ ! -e ~/sc_ready ]; do sleep 1; done

grunt e2e -ci