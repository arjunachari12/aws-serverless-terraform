output "lambda_function_name" {
  description = "The name of the Lambda function"
  value       = aws_lambda_function.example.function_name
}

output "lambda_role_arn" {
  description = "IAM Role ARN for the Lambda function"
  value       = aws_iam_role.lambda_role.arn
}
