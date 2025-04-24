---
id: connection
title: Estado de la Conexión
sidebar_position: 2
---

# 🌐 Estado de la Conexión

La sección de **Connection** indica si la página se ha cargado de forma segura mediante HTTPS y qué tipo de cifrado se está utilizando.

### Tipos de conexiones

- ✅ **Secure**: Conexión segura con cifrado TLS válido.
- ⚠️ **Mixed Content**: Recursos cargados por HTTP en una página HTTPS.
- ❌ **Not Secure**: Página cargada por HTTP o con problemas de certificado.

### Información mostrada

- **Protocol**: Ej. TLS 1.3
- **Key Exchange**: Algoritmo usado para establecer conexión segura.
- **Cipher**: Algoritmo de cifrado de datos (Ej. AES_256_GCM).

### Consejos

- Siempre usa HTTPS.
- Habilita HSTS para evitar downgrades a HTTP.
- No mezcles contenido HTTP en páginas HTTPS.
