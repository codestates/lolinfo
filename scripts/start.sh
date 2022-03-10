#!/bin/bash
cd /home/ubuntu/lolinfo/server

export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start server.js

sleep 3s && pm2 status // pm2동작을 확인 - 제대로 작동했는지, codedeploy ->로그 확인
echo $DATABASE_HOST     // 환경변수에 DATABASE_HOST의 값이 무엇인지 확인
