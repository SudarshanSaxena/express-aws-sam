# create an s3 bucket
aws s3 mb s3://test-sud-sam --profile sudarshan-admin --region ap-south-1

# package cloudformation
aws cloudformation package  --s3-bucket test-sud-sam --template-file template.yaml --output-template-file gen/template-generated.yaml --profile sudarshan-admin --region ap-south-1
# sam package ... 

# deploy 
aws cloudformation deploy --template-file gen/template-generated.yaml --stack-name hello-world-sam --capabilities CAPABILITY_IAM --profile sudarshan-admin --region ap-south-1
