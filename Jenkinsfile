pipeline {
  agent any // runs the job on any available Jenkins agent
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
          sh 'firebase deploy --token "$TOKEN"'
        }
      }
    }
  }
}
