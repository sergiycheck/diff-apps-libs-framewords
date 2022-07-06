#!/bin/sh
exec serverless invoke local -f hello \
-p ./tests/2_input.json