## Description

[Express](https://expressjs.com/)
Because of Express is one of the simplest Framework, This template is simplest example for Express server with postgresql.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
$ node app.js
```

## Make it mine

Open Vscode search tab(Left Side), And Search "express-server"
Replace "express-server" with "your project name" excluding the package-lock.json file.

## Deployment

This project is deployed using GCP (Google Cloud Platform) Cloud Run. Cloud Run is a fully managed serverless platform that allows for seamless deployment when pushing to GitHub. Please refer to the following steps:

- Complete the basic setup, such as configuring a GCP billing account and enabling Cloud Run.
- In Cloud Run, select "Services" under "Deploy Container."
- During the Cloud Run service creation process, click "Continuous Deployment from Repository" in GitHub and configure Cloud Build according to the guidelines.
- Ensure that the "service name" matches your project name(In your cloudbuild.yaml file, next to $PROJECT_ID) exactly.
- If you are using a Cloud SQL database, open the "Container, Volumes, Networking, and Security" tab and add the Cloud SQL connection at the bottom.

Congratulations! Once you've completed the steps above, the first instance will be deployed from the repository...!
