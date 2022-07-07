#!/bin/sh

region="eu-central-1"

exec aws kinesis get-shard-iterator \
--stream-name RootAccess --shard-id shardId-000000000000 \
--shard-iterator-type TRIM_HORIZON \
--region $region
