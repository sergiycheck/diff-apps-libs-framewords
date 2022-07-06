#!/bin/sh

funcName="sub-filt-lambda-identical-dev-hello"
region="eu-central-1"
accId="581425740433"
logGroupName="/aws/lambda/sub-filt-lambda-identical-dev-hello/another"

aws lambda add-permission \
    --function-name "$funcName" \
    --statement-id "$funcName-another" \
    --principal "logs.$region.amazonaws.com" \
    --action "lambda:InvokeFunction" \
    --source-arn "arn:aws:logs:$region:$accId:log-group:$logGroupName:*" \
    --source-account "$accId"
