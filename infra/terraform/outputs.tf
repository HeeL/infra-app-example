output "namespace_name" {
  value = kubernetes_namespace.example.metadata[0].name
}
