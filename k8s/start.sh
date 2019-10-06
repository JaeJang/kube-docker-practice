#! bin/bash

kubectl create -f /config
kubectl create -f /secret
kubectl create -f /deployments
kubectl create -f /services

kubectl create namespace ingress
cd ingress
kubectl create -f ingress-config.yaml -ningress
kubectl create -f ingress-roles.yaml -ningress
kubectl create -f ingress-controller-deployment.yaml -ningress
kubectl create -f ingress-service.yaml -ningress
kubectl create -f ingress-nginx.yaml -ningress
