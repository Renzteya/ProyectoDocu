---
id: garbage-collection
title: Garbage Collection
sidebar_position: 4
---

# 🗑️ Garbage Collection

La **recolección de basura (Garbage Collection - GC)** es el proceso mediante el cual JavaScript libera la memoria de objetos que ya no son necesarios. El panel **Memory** te permite ver cómo y cuándo se ejecuta el proceso de GC, lo que te ayudará a entender el uso de memoria de tu aplicación.

### ¿Cómo se muestra la recolección de basura en DevTools?

Cuando realizas una grabación en el panel **Memory**, los eventos de GC se indican en el gráfico de timeline. Puedes ver cómo se realiza la recolección de objetos no utilizados, lo que indica el momento en el que se libera la memoria.

### ¿Por qué es importante observar la GC?

- **Frecuencia de la GC**: Si la recolección de basura ocurre demasiado seguido, puede afectar el rendimiento de la aplicación.
- **Fugas de memoria**: Si la GC no está eliminando objetos correctamente, podría ser un indicativo de que hay fugas de memoria en tu aplicación.

## Optimización del proceso de GC

- Asegúrate de liberar recursos de manera eficiente, eliminando referencias a objetos no utilizados.
- Usa la función **Garbage Collector** manualmente para forzar una recolección de basura y probar cómo afecta al rendimiento de la aplicación.
