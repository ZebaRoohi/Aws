AWS Elastic Beanstalk Deployment Guide for Node.js (CRUD API)
This guide outlines the complete process to deploy a Node.js application with a MongoDB backend to AWS Elastic Beanstalk using the EB CLI.

1. Prerequisites
Install AWS CLI: pip install awscli --upgrade --user

Configure AWS CLI: aws configure (Enter your credentials)

Install EB CLI: pip install awsebcli --upgrade --user

Install Node.js: Ensure your local version matches the one you'll select on AWS (e.g., v22.x).

2. Project Setup & Initialization
Navigate to your project folder in your terminal (cd your-project-name).

Initialize the EB CLI: eb init

Application Name: Create a new application (e.g., crud-api).

Region: Select a region (e.g., ap-south-1).

Platform: Select Node.js.

Platform Branch: Select the Node.js version you are using (e.g., Node.js 22 running on 64bit Amazon Linux 2023).

CodeCommit: No

SSH: Yes or No (your preference)

Create .ebignore file in your root directory to exclude unnecessary files from deployment:

node_modules/
.env
3. Environment Creation & Deployment
Create the Elastic Beanstalk environment: eb create

Environment Name: Enter a descriptive name (e.g., crud-api-dev).

DNS CNAME Prefix: Accept the default or provide a unique one.

Load Balancer: Select application (option 2).

Spot Fleet: N (No) to use reliable On-Demand instances.

Set Environment Variables: Your application needs to know its MongoDB connection string and run in a production environment.

Set MONGO_URI:

Bash

eb setenv MONGO_URI="your_mongodb_connection_string"
(Note the quotation marks for Windows/CMD)

Set NODE_ENV:

Bash

eb setenv NODE_ENV=production
4. Verifying & Testing the API
Check Environment Health: Go to the Elastic Beanstalk console in your browser. The health status for your environment should show as "OK".

Get the Live URL: Find the URL of your deployed application on the environment dashboard (e.g., http://crud-api-dev.ap-south-1.elasticbeanstalk.com).

Test the Endpoints: Use a REST client like Postman or Insomnia to test all your API's CRUD operations.

GET all items: GET to http://<your-url>/api/items

POST a new item: POST to http://<your-url>/api/items with a JSON body.

GET a single item: GET to http://<your-url>/api/items/<item-id>

PUT (update) an item: PUT to http://<your-url>/api/items/<item-id> with a JSON body.

DELETE an item: DELETE to http://<your-url>/api/items/<item-id>

5. Future Code Updates
After making changes to your code, save your files.

Run the simple eb deploy command from your project's root directory. The EB CLI will automatically package and deploy the new version of your application to the existing environment.

6. Troubleshooting
"Degraded" Health: This usually means your application crashed on startup.

Check logs: Go to AWS Console -> Elastic Beanstalk -> Your Environment -> Logs. Download the Full Logs and look for errors in web.stdout.log or eb-engine.log.

Common Errors: EADDRINUSE, failed to connect to MongoDB, undefined environment variable. These indicate issues with your application's code or configuration. The fix is to correct the code/settings and run eb deploy again.