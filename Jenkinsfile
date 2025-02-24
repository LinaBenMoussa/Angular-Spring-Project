pipeline {
    agent any
    tools {
        jdk 'JDK17'
    }
    environment {
        DOCKER_TAG = getVersion()
    }
    stages {
        stage('Clone Stage') {
            steps {
                git url: 'https://github.com/LinaBenMoussa/Angular-Spring-Project.git', branch: 'main'

            }
        }
        stage('Docker Build') {
            steps {
                sh "docker-compose -f docker-compose.yml build"
            }
        }
        stage('DockerHub Push') {
            steps {
                withCredentials([string(credentialsId: '317e9fff-659e-4895-bc13-81651f33b049', variable: 'DockerHubPassword')]) {
                    sh "docker login -u linabenmoussa150 -p ${DockerHubPassword}"
                }
                sh "docker-compose -f docker-compose.yml push"
            }
        }
        stage('Deploy') {
            steps {
                sshagent(credentials: ['vagrant_ssh']) {
                    sh "ssh-keyscan -H 192.168.1.183 >> ~/.ssh/known_hosts"
                    sh "ssh -o StrictHostKeyChecking=no vagrant@192.168.1.183 'sudo docker-compose -f docker-compose.yml up -d'"
                }
            }
        }
    }
}

def getVersion() {
    def version = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
    return version
}
