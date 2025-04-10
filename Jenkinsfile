pipeline {
    agent any  // This can be adjusted to use a specific agent/label if required

    environment {
        // Define environment variables if needed, like project path
        PROJECT_PATH = 'D:/git/Playwright-Automation'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Navigate to project folder
                    dir("${env.PROJECT_PATH}") {
                        // Install npm dependencies
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Install Browsers') {
            steps {
                script {
                    // Install the Playwright browsers
                    dir("${env.PROJECT_PATH}") {
                        bat 'npx playwright install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run the Playwright tests
                    dir("${env.PROJECT_PATH}") {
                        bat 'npm run e2e'
                    }
                }
            }
        }
    }

    post {
        always {
            // Perform any clean-up actions or archiving of test results
            echo 'Cleaning up or archiving results'
        }

        success {
            echo 'Tests passed successfully!'
        }

        failure {
            echo 'Tests failed, please check the logs for more details.'
        }
    }
}
