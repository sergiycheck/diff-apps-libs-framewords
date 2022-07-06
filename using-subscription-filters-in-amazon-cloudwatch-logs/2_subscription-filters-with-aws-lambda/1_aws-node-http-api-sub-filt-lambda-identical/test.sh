#!/bin/sh
exec serverless invoke local -f hello \
-p ./tests/1_input.json