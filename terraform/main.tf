terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }

 backend "remote" {
    organization = "dashboardJS"

    workspaces {
      name = "dashboards"
    }
  }
}

# Main region where the resources should be created in
provider "aws" {
  region = "us-east-1"
}

resource "aws_db_instance" "development" {
  engine               = "postgres"
  name                 = "dashboardjs"
  engine_version       = "11.10"
  username             = "ahmedRezk"
  password             = "dashboardAhmedRezk"
  instance_class       = "db.t3.micro"
  allocated_storage    = 10
  max_allocated_storage = 100
  storage_encrypted     = false
  publicly_accessible = true
}

module "tf_next" {
  source = "dealmore/next-js/aws"

  next_tf_dir     = var.next_tf_dir
  deployment_name = var.deployment_name

  # Uncomment when using in the cloned monorepo for tf-next development
  # source = "../../.."
  # debug_use_local_packages = true
}