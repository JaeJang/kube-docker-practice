#! bin/bash

kubectl delete deployment --all
kubectl delete svc --all
kubectl delete configmaps --all
kubectl delete secret --all


kubectl delete deployment -ningress --all
kubectl delete svc -ningress --all
kubectl delete configmaps -ningress --all
kubectl delete secret -ningress --all
kubectl delete ServiceAccount -ningress --all
kubectl delete ClusterRole -ningress --all
kubectl delete ClusterRoleBinding -ningress --all
