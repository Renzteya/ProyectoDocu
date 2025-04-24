---
id: frames
title: Análisis de Frames
sidebar_position: 3
---

# 🖼️ Análisis de Frames

En el panel **Performance**, los **frames** representan la cantidad de cuadros renderizados por segundo durante una grabación. Es importante para evaluar la fluidez de la aplicación.

### ¿Por qué los frames son importantes?

- **Frames por segundo (FPS)**: Mide la cantidad de cuadros que se renderizan en un segundo. Para una experiencia fluida, el objetivo es mantener **60 FPS**.
- Si el número de FPS cae por debajo de **60**, es una señal de que el rendimiento es deficiente, y la experiencia del usuario podría verse afectada.
- Los picos rojos en la línea de tiempo indican **cuellos de botella** o problemas de rendimiento durante el renderizado.

## 🔍 ¿Cómo mejorar el rendimiento de los frames?

- Reduce el trabajo en el hilo principal (por ejemplo, evitando operaciones costosas de JavaScript durante el renderizado).
- Usa técnicas como **requestAnimationFrame()** para optimizar las animaciones.
