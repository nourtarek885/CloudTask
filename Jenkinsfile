pipeline {
  agent any // runs the job on any available Jenkins agent
  tools {
    nodejs "node18"
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Deploy') {
      steps {
        withCredentials([string(credentialsId: 'FIREBASE_TOKEN', variable: 'TOKEN')]) {
          sh 'npm install -g firebase-tools'  
          sh 'firebase deploy --project task2-7b0d5 --token "$TOKEN"'
        }
      }
    }
  }
}

