#!/bin/sh

# create kinesis stream
# exec aws kinesis create-stream --stream-name "RootAccess" --shard-count 1

#describe stream
aws kinesis describe-stream --stream-name "RootAccess"

