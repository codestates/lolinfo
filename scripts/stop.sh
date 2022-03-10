#!/bin/bash
cd /home/ubuntu/lolinfo/server
pm2 stop server.js 2> /dev/null || true
pm2 delete index.js 2> /dev/null || true