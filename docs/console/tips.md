---
id: tips
title: Consejos y trucos para usar Console
sidebar_position: 4
---

# 💡 Consejos y trucos para Console

Algunos tips para sacarle más provecho a la consola:

## 1. 🧪 Prueba lógica en tiempo real

Puedes testear expresiones, funciones o llamadas sin modificar tu código fuente.

## 2. 🔍 Explora objetos fácilmente

Haz clic en el triángulo junto a cualquier objeto para ver su estructura interna.

## 3. 📦 Agrupación de mensajes

```js
console.group("Detalles");
console.log("Primera línea");
console.log("Segunda línea");
console.groupEnd();
```

## 4. ⏱️ Medición de tiempo

```js
console.time("Loop");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("Loop");
```
