variable "aws_region" {
  description = "Регіон AWS"
  type        = string
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID образу Ubuntu для EC2"
  type        = string
}

variable "instance_type" {
  description = "Тип інстансу EC2"
  type        = string
  default     = "t2.micro"
}

variable "key_name" {
  description = "Назва ключа (Key Pair) у AWS EC2"
  type        = string
}
