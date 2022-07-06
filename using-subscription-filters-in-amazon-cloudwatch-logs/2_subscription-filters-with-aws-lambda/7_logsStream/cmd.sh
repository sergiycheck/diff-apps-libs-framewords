#!/bin/sh

logGroupName="/aws/lambda/sub-filt-lambda-identical-dev-hello/another"

exec aws logs put-log-events --log-group-name $logGroupName \
--log-stream-name stream1 \
--log-events "[{\"timestamp\":"$(date +%s)" , \"message\": \"Simple Lambda Test\"}]"