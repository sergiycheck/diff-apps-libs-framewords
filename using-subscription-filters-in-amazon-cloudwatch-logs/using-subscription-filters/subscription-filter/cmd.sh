#!/bin/sh

exec aws logs put-subscription-filter \
    --log-group-name "CloudTrail/logs" \
    --filter-name "RootAccess" \
    --filter-pattern "{$.userIdentity.type = Root}" \
    --destination-arn "arn:aws:kinesis:eu-west-3:581425740433:stream/RootAccess" \
    --role-arn "arn:aws:iam::581425740433:role/CWLtoKinesisRole"