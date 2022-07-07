#!/bin/sh

region="eu-central-1"

# create kinesis stream
# exec aws kinesis create-stream \
# --stream-name "RootAccess" --shard-count 1 \
# --region eu-central-1


#describe stream
aws kinesis describe-stream --stream-name "RootAccess" --region $region

