output "instance_ip" {
  description = "Публічна IP-адреса створеного EC2"
  value       = aws_instance.web_server.public_ip
}
