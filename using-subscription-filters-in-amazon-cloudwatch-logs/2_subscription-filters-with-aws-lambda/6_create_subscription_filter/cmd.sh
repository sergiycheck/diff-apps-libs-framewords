#!/bin/sh

logGroupName="/aws/lambda/sub-filt-lambda-identical-dev-hello/another"

exec aws logs put-subscription-filter \
    --log-group-name $logGroupName \
    --filter-name demo \
    --filter-pattern "" \
    --destination-arn arn:aws:lambda:eu-central-1:581425740433:function:sub-filt-lambda-identical-dev-hello
