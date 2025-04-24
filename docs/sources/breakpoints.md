---
id: breakpoints
title: Uso de breakpoints
sidebar_position: 2
---

# 🎯 Breakpoints (Puntos de interrupción)

Los *breakpoints* permiten detener la ejecución del código en una línea específica para inspeccionar su estado.

## 🔧 Cómo agregarlos:

1. Abre un archivo JS desde el panel `Sources`.
2. Haz clic en el número de línea donde quieras que se detenga el código.

## 🔍 Tipos de breakpoints:

- **Line Breakpoints**: Se detienen en una línea específica.
- **Conditional Breakpoints**: Solo se activan si se cumple una condición.
- **DOM Breakpoints**: Monitorean cambios en elementos del DOM.
- **XHR/Fetch Breakpoints**: Se activan con solicitudes HTTP específicas.

```js
// Ejemplo de breakpoint condicional
if (usuario === "admin") {
  console.log("Acceso permitido");
}

```
> También puedes habilitar/deshabilitar breakpoints desde la barra lateral. 
