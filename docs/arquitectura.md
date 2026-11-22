# Arquitectura del Sistema — Patitas

## Diagrama C4: Nivel 1 (Contexto) y Nivel 2 (Contenedores)

```mermaid
C4Context
  title Diagrama de Contexto - Plataforma Patitas
  Person(dueno, "Dueño de Mascota / Admin", "Gestiona mascotas, vacunas y citas desde la web.")
  System(patitas, "Patitas Web App", "Aplicación web para control veterinario y recordatorios.")
  System_Ext(supabase, "Supabase (Auth + PostgreSQL)", "Autenticación de usuarios y persistencia de datos en la nube.")
  System_Ext(vercel, "Vercel Edge Network", "Alojamiento estático y entrega global bajo patitas.website.")

  Rel(dueno, patitas, "Consulta y registra mascotas vía HTTPS")
  Rel(patitas, vercel, "Desplegado en")
  Rel(patitas, supabase, "Autentica sesiones y ejecuta CRUD SQL")

flowchart LR
  U[Usuario / Navegador] -->|HTTPS| V[Vercel Hosting - patitas.website]
  V -->|Frontend HTML/JS| A[Módulo Admin y Login]
  A -->|Supabase JS SDK| SA[Supabase Auth]
  A -->|REST / PostgREST| DB[(PostgreSQL - Tabla mascotas)]
