pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {   
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Testing') {
      steps {
         sh 'node test.js'
      }
    }

   stage('Deployment') {
     steps {
      sh 'echo deployed'
    }       
  }
}
