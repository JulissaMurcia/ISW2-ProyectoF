```markdown
# ADR-001: Usar Supabase PostgreSQL gestionado en lugar de un backend propio en Node/Express

**Estado:** Aceptado  
**Fecha:** 2026-11-21

## Contexto
El producto **Patitas** requiere almacenar de forma persistente y segura los registros de mascotas, vacunas y recordatorios de sus usuarios,
permitiendo consultas CRUD desde el panel administrativo (`/admin`) sin administrar servidores ni infraestructura compleja.

## Decisión
Usar Supabase PostgreSQL gestionado en lugar de un backend propio en Node/Express.

## Consecuencias
- **Positivas:** Entrega una API REST automática sobre PostgreSQL, políticas de seguridad a nivel de fila (RLS) y escalabilidad sin mantenimiento de servidor.
- **Negativas (Trade-offs):** Se sacrifica control total sobre lógica de negocio personalizada en el servidor y se genera dependencia directa del proveedor BaaS (vendor lock-in).
