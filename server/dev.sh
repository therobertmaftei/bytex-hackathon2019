#! /bin/bash

for service in *; do
  if [ -d "$service" ]; then
    cd $service && npm run dev &
  fi
done