---
id: storage
title: Storage (Local Storage, Session Storage, Cookies)
sidebar_position: 2
---

# 🗄️ Storage (Local Storage, Session Storage, Cookies)

El panel **Storage** dentro de Application te permite acceder a varios tipos de almacenamiento utilizados por las aplicaciones web modernas. Aquí puedes ver y administrar los datos almacenados en el navegador, incluyendo **Local Storage**, **Session Storage**, y **Cookies**.

## 1. **Local Storage**

El **Local Storage** permite almacenar datos de manera persistente en el navegador. Los datos almacenados en Local Storage no expiran, y permanecen disponibles incluso cuando el navegador se cierra.

### ¿Cómo acceder a Local Storage?

1. Abre el panel **Application**.
2. En el menú de la izquierda, selecciona **Local Storage**.
3. Puedes ver y editar los pares de clave-valor almacenados.

### Usos comunes de Local Storage

- Almacenar datos del usuario entre sesiones.
- Guardar configuraciones o preferencias locales.
- Mantener información entre recargas de la página.

## 2. **Session Storage**

A diferencia de Local Storage, **Session Storage** mantiene los datos solo durante una sesión de navegación. Los datos se eliminan cuando la página o el navegador se cierra.

### ¿Cómo acceder a Session Storage?

1. En el panel **Application**, selecciona **Session Storage**.
2. Visualiza y edita los datos de la sesión actual.

### Usos comunes de Session Storage

- Almacenar datos temporales para la duración de una sesión.
- Mantener el estado de una aplicación durante la navegación en una sola ventana.

## 3. **Cookies**

Las **Cookies** son pequeños archivos que el servidor o el navegador almacenan en el cliente. Son útiles para almacenar información como las preferencias de usuario o el estado de inicio de sesión.

### ¿Cómo acceder a las Cookies?

1. En el panel **Application**, selecciona **Cookies**.
2. Visualiza las cookies asociadas con tu dominio y edita su contenido si es necesario.

### Usos comunes de Cookies

- Autenticación y manejo de sesiones de usuario.
- Almacenamiento de preferencias o configuraciones de usuario.

## ¿Por qué usar el panel Storage?

El panel **Storage** es esencial para depurar problemas relacionados con la persistencia de datos en tu aplicación. Te ayuda a entender cómo los datos son almacenados y gestionados en el navegador.
