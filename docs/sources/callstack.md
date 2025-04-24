---
id: callstack
title: Call Stack y Scope
sidebar_position: 3
---

# 🧠 Call Stack y Scope

Cuando se detiene la ejecución con un breakpoint, el panel `Sources` muestra información valiosa como:

## 📜 Call Stack

Lista las funciones llamadas en orden hasta el punto actual.

```txt
funcionPrincipal()
 → validarUsuario()
   → consultarAPI()

```

Puedes hacer clic en cualquier función de la pila para ver su contexto.

## 🔍 Scope

Permite ver las variables locales, de bloque y globales en el punto de ejecución.

- Local: variables dentro de la función actual

- Closure: variables del contexto superior

- Global: variables disponibles en window

> Esto es muy útil para inspeccionar valores sin tener que hacer console.log().