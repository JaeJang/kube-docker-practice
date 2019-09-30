#! bin/bash
PWD=/hosthome/jae/dev/kube-docker-practice
SERVICE=$1
TAG=$2

minikube -p kube-docker ssh "cd $PWD && docker build -t jaejang5566/kube-docker-$SERVICE:$TAG $SERVICE/ "
kubectl set image deployment/$SERVICE $SERVICE=jaejang5566/kube-docker-$SERVICE:$TAG
kubectl delete pod $(kubectl get pods -l app=api -o jsonpath={'.items[0].metadata.name'})