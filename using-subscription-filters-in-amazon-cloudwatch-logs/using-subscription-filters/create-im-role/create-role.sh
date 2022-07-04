#!/bin/sh

# aws:SourceArn global condition context key to prevent the 
# confused deputy security problem

exec aws iam create-role --role-name CWLtoKinesisRole \
--assume-role-policy-document file://TrustPolicyForCWL-Kinesis.json