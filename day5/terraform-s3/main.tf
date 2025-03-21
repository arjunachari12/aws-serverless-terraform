terraform {
required_providers {
aws = {
source  = "hashicorp/aws"
version = "~> 4.16"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
    region = "us-east-1"
}


resource "aws_s3_bucket" "example" {
  bucket = "my-tf-test-bucket-arjun1232321"

  tags = {
    Name        = "Arjun"
    Environment = "Dev"
  }
}

