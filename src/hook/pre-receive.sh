#!/bin/bash

# Run unit tests
npm test || exit 1

# Run Gitleaks
gitleaks detect--source. --verbose || exit 1
