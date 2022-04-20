// Adding inline policy from json to lambda
<!-- {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3Perm",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:ListBucket"
      ],
      "Resource": "*"
    },
]
} -->
const apiLambdaPolicyDocument = PolicyDocument.fromJson(
  JSON.parse(fs.readFileSync("lib/policy.json", "utf-8"))
);
const apiLambdaInlinePolicy = new Policy(this, "apiLambdaInlinePolicy", {
  document: apiLambdaPolicyDocument,
});
lambda.lambdafunction.role?.attachInlinePolicy(apiLambdaInlinePolicy);
