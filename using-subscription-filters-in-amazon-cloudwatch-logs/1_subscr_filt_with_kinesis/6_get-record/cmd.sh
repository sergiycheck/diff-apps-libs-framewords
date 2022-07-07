#!/bin/sh

region="eu-central-1"

shardIterator=$(aws kinesis get-shard-iterator \
--stream-name RootAccess --shard-id shardId-000000000000 \
--shard-iterator-type TRIM_HORIZON \
--region $region \
--debug | jq -r '.ShardIterator')

exec aws kinesis get-records \
--limit 10 \
--shard-iterator $shardIterator \
--region $region \
--debug