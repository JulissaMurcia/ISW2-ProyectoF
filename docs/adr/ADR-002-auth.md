# ADR-002: Implementar autenticación con Supabase Auth y protección de rutas en cliente

**Estado:** Aceptado  
**Fecha:** 2026-11-21

## Contexto
El panel de administración (`/admin`) permite crear, listar y eliminar mascotas, por lo que debe restringirse únicamente a usuarios autenticados mediante correo y contraseña.

## Decisión
Delegar la gestión de identidad, tokens JWT y sesiones a Supabase Auth, verificando la sesión activa antes de renderizar la vista `/admin`.

## Consecuencias
- **Positivas:** Evita almacenar contraseñas manualmente, reduce riesgos de seguridad en el manejo de tokens y acelera la integración con `login.html`.
- **Negativas (Trade-offs):** La validación inicial de sesión ocurre en el navegador antes de redirigir, dependiendo de la disponibilidad del servicio de autenticación externo.
