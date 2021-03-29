output "cloudfront_domain_name" {
  value = module.tf_next.cloudfront_domain_name
}
output "cloudfront_hosted_zone_id" {
  value = module.tf_next.cloudfront_hosted_zone_id
}

output "db_password" {
  value       = aws_db_instance.development.password
  description = "The password for logging in to the database."
  # sensitive   = true
}

output "db_endpoint" {
  value       = aws_db_instance.development.endpoint
  description = "The endpoint for logging in to the database."
  # sensitive   = true
}