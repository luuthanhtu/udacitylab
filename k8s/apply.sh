kubectl apply -f aws-secret.yaml
kubectl apply -f env-secret.yaml
kubectl apply -f env-configmap.yaml
kubectl apply -f backend-feed-deployment.yaml
kubectl apply -f backend-feed-service.yaml
kubectl apply -f backend-user-deployment.yaml
kubectl apply -f backend-user-service.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f reverseproxy-deployment.yaml
kubectl apply -f reverseproxy-service.yaml
kubectl get deploy -A
kubectl delete deploy backend-feed -n default
kubectl delete deploy backend-user -n default
kubectl delete deploy frontend -n default
kubectl delete deploy reverseproxy -n default
kubectl get services
kubectl delete svc backend-feed
kubectl delete svc backend-user
kubectl delete svc frontend
kubectl delete svc reverseproxy
kubectl get pods
kubectl describe pod backend-feed
kubectl describe deploy backend-feed
kubectl logs deployment/backend-feed
kubectl describe pod backend-user
kubectl describe deploy backend-user
kubectl logs deployment/backend-user
kubectl logs backend-feed-65b89c7d5d-4mnkm -n default