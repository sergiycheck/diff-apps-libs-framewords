#!/bin/sh

# Create a permissions policy to define what actions CloudWatch 
# Logs can do on your account


# Associate the permissions policy with 
# the role using the following put-role-policy command:

exec aws iam put-role-policy \
--role-name CWLtoKinesisRole  --policy-name Permissions-Policy-For-CWL \
--policy-document file://PermissionsForCWL-Kinesis.json