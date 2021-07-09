#!/bin/bash

echo "lancement"
echo "${SCENARIO}"
echo "${WORKSPACE}"
timeout 5m /home/smag/dev/konium/mocha /home/smag/dev/konium/scenarios/"${SCENARIO}".js --reporter mochawesome --reporter-options reportDir="${WORKSPACE}/mochawesome-report",reportFilename="mochawesome" --bail
echo "FIN"
