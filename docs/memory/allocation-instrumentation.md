---
id: allocation-instrumentation
title: Allocation Instrumentation on Timeline
sidebar_position: 3
---

# 🧑‍💻 Allocation Instrumentation on Timeline

El modo **Allocation Instrumentation on Timeline** permite observar cómo la memoria se asigna a lo largo del tiempo durante la ejecución de tu aplicación. Esta herramienta es muy útil para identificar picos en el uso de memoria y posibles fugas de memoria en tiempo real.

### ¿Cómo usar Allocation Instrumentation?

1. En el panel **Memory**, selecciona **Record Allocation Timeline**.
2. Realiza acciones en tu página para generar tráfico de memoria.
3. Detén la grabación y observa el gráfico que muestra los eventos de asignación de memoria.

### ¿Qué puedes ver en el gráfico de asignación?

- **Picos de memoria**: Los aumentos en la memoria asignada indican qué acciones están consumiendo recursos.
- **Eventos de asignación**: Visualiza las asignaciones de memoria que se realizaron durante la grabación.
- **Tiempos de recolección de basura**: Los intervalos donde la memoria es limpiada por el proceso de Garbage Collection.

## ¿Por qué usar esta herramienta?

Es útil para rastrear y depurar el comportamiento dinámico de la memoria mientras interactúas con tu aplicación, ya que muestra cómo los objetos se crean y liberan en tiempo real.
