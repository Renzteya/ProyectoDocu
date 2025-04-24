---
id: logging
title: Mensajes y niveles de log
sidebar_position: 2
---

# 📝 Mensajes y niveles de log

La consola muestra diferentes tipos de mensajes, cada uno con su nivel de importancia:

## 🧭 Tipos de logs:

- `console.log()` → Información general
- `console.info()` → Información destacada
- `console.warn()` → Advertencias (amarillo)
- `console.error()` → Errores (rojo)
- `console.debug()` → Mensajes de depuración (ocultos por defecto)

## 🎯 Uso típico

```js
console.log("Valor:", variable);
console.error("Error inesperado", err);
console.warn("Esto puede causar problemas");
