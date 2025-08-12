pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "longhh11/your-app:${env.BUILD_NUMBER}"  // Thay hhlong1107 bằng Docker Hub username của bạn
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Long-Lost-s/my-cicd-app'  // Thay bằng URL repo của bạn
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                ithCredentials([file(credentialsId: 'kubeconfig-file', variable: 'KUBECONFIG')]) {
                    sh 'kubectl apply -f deployment.yaml --kubeconfig=$KUBECONFIG'
                }
            }
        }
    }
}