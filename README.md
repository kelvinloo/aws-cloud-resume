# AWS Cloud Resume Website

Goal: To deploy a website with my resume backed by AWS serverless architecture and Implement a CI/CD pipeline using Infrastructure as code so website can be updated remotely over the Internet.

Services used:
•	S3
•	CloudFront
•	Certificate Manager
•	DynamoDB
•	API Gateway
•	Lambda
•	Route 53
•	Terraform
•	GitHub Actions

## AWS architecture
![Image](https://github.com/kelvinloo/aws-cloud-resume/blob/f335aacd91e63952597d51dc3bba11b2b7d75ef6/AWS%20Diagram.jpg)

## HTML/CSS
  To save time I imported and formatted my resume into a bootstrap template by davidtmiller: https://github.com/startbootstrap/startbootstrap-resume
  Following that, I uploaded my website files on Amazon S3, and tested static website hosting feature in S3 by making the S3 bucket public. My website was now hosted on S3 successfully.

## HTTPS/DNS

  Domain Registration: I purchased the domain name kelvinloo.com through Amazon Route 53.
  Content Delivery Network (CDN): I set up CloudFront, a CDN service, to deliver website content efficiently. S3 buckets served as the origin for the CDN.
  SSL Certificate: I created a security certificate via Amazon Certificate Manager and linked it to CloudFront. This ensures secure communication (HTTPS) for website visitors.
  Forced HTTPS: I configured CloudFront to redirect all traffic to the secure HTTPS protocol.
  Domain Management: I created Hosted Zone entries in Route 53 for both the kelvinloo.com domain and a subdomain (www.kelvinloo.com).

## JavaScript and website visitor counter
Added a website visitor counter, the following architecture was used to implement this feature:

Data Storage and Processing:

  DynamoDB Table: Created a DynamoDB table to store the number of page visits.
  Lambda Function: Developed a Lambda function to retrieve the current visit count from DynamoDB, increment it, and update the table.
  Function URL: Deployed the Lambda function as a Function URL for testing. Successfully tested the function using cURL, verifying correct count increments in both the DynamoDB table and the cURL response.
  Frontend Integration: Integrated a JavaScript file to call the API and display the updated visit count on the website.

API Gateway:

  API Gateway: Configured an API Gateway to expose the Lambda function as an API endpoint.
  Rate Limiting and API Key: Implemented rate limiting and API key authentication to mitigate potential cost overages.
  Cloudfront Integration: Set up CloudFront to call the API Gateway endpoint, with the X-API-Key header configured to authenticate requests.

## Infrastructure as Code (Terraform)
I migrated the architecture to Infrastructure as Code using Terraform. By following online tutorials and forums, I successfully replicated the AWS infrastructure that was previously manually configured. This Terraform configuration can be reused or adapted for future website deployments.

## CI/CD pipeline
I created two separate GitHub repositories:

  Frontend Repository: This repository contains the HTML, CSS, and JavaScript code for my resume website.
  Infrastructure Repository: This repository holds the Terraform configuration files that define the underlying AWS infrastructure.

To protect sensitive information like AWS access keys and secret keys, I implemented the following measures:

  .gitignore: A .gitignore file was added to the infrastructure repository to prevent accidental exposure of these secrets.
  Private S3 Bucket: A private S3 bucket was configured as a backend for storing the sensitive information, ensuring it remains secure and inaccessible to the public."

To enable GitHub Actions to automate AWS tasks, I created an IAM role granting necessary permissions to GitHub. This allows GitHub Actions to:

  Deploy to S3: Upload website files to an S3 bucket upon a Git commit.
  Manage Infrastructure: Update Terraform configurations and trigger deployments on commit.

## Final thoughts
This project proved to be a valuable challenge, allowing me to solidify my understanding of AWS concepts and practices gained from the Solutions Architect Associate certification.

Links to related repositories: [frontend](https://github.com/kelvinloo/aws-cloud-resume) / [backend](https://github.com/kelvinloo/aws-cloud-resume-terraform) and the website itself [https://www.kelvinloo.com](https://www.kelvinloo.com)
