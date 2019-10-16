#! bin/bash

kubectl create -f /config
kubectl create -f /secret
kubectl create -f /deployments
kubectl create -f /services

