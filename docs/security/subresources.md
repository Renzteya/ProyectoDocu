---
id: subresources
title: Recursos Cargados
sidebar_position: 4
---

# 📦 Recursos Cargados

La sección **Subresources** muestra si los recursos cargados por la página son seguros o no.

### Tipos de recursos inspeccionados

- Scripts
- Imágenes
- Hojas de estilo
- Web fonts

### ¿Qué busca DevTools?

- ✅ Recursos servidos por HTTPS.
- ⚠️ Recursos servidos por HTTP (mixed content).

### Ejemplo:

```txt
⚠️ Insecure content: The page at https://example.com loaded an insecure script from http://insecure-source.com/script.js

```

### Consejos

- Asegúrate de que todos los recursos estén bajo HTTPS.

- Usa herramientas como Lighthouse para auditar seguridad.
