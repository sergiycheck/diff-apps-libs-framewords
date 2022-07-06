#!/bin/sh

# command execution takes long time

region="eu-north-1"

exec aws kinesis get-shard-iterator \
--stream-name RootAccess --shard-id shardId-000000000000 \
--shard-iterator-type TRIM_HORIZON
--region $region