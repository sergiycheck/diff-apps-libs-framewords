#!/bin/sh

# this command does not work
# it can not find  existing --log-group-name
# created subscription filter from the web interface
region="eu-north-1"
accId="581425740433"
awsRole="CWLtoKinesisRole"
logGroupName="log-group-kinesis-subscription-filter"

exec aws logs put-subscription-filter \
    --log-group-name $logGroupName \
    --filter-name "RootAccess" \
    --filter-pattern "{$.userIdentity.type = Root}" \
    --destination-arn "arn:aws:kinesis:$region:$accId:stream/RootAccess" \
    --role-arn "arn:aws:iam::$accId:role/$awsRole"
    --region $region