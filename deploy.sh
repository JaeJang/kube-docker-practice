docker build -t jaejang5566/kube-docker-client:latest -t jaejang5566/kube-docker-client:$SHA -f ./client/Dockerfile ./client
docker build -t jaejang5566/kube-docker-api:latest -t jaejang5566/kube-docker-api:$SHA -f ./api/Dockerfile ./api

docker push jaejang5566/kube-docker-client:latest
docker push jaejang5566/kube-docker-client:$SHA

docker push jaejang5566/kube-docker-api:latest
docker push jaejang5566/kube-docker-api:$SHA

kubectl apply -f k8s
kubectl set image deployments/client client=jaejang5566/kube-docker-client:$SHA
kubectl set image deployments/api api=jaejang5566/kube-docker-api:$SHA