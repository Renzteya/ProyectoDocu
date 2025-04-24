---
id: heap-snapshot
title: Heap Snapshot
sidebar_position: 2
---

# 🧳 Heap Snapshot

Una **Heap Snapshot** es una representación estática de la memoria utilizada por la aplicación en un momento específico. Muestra cómo están distribuidos los objetos en la memoria y te permite analizar las relaciones entre ellos.

### ¿Cómo tomar un Heap Snapshot?

1. Abre el panel **Memory** en DevTools.
2. Haz clic en **Take Snapshot** para generar una instantánea de la memoria.
3. La herramienta mostrará un listado de objetos organizados por su tipo, tamaño y la cantidad de instancias en memoria.

### ¿Qué puedes hacer con un Heap Snapshot?

- **Filtrar y ordenar objetos**: Puedes filtrar objetos por tipo y ordenar por su tamaño, lo que te ayuda a identificar objetos grandes que consumen memoria.
- **Buscar objetos huérfanos**: Busca objetos que ya no se utilizan pero que siguen ocupando memoria.
- **Ver la retención de objetos**: Analiza por qué ciertos objetos no se liberan de la memoria y continúan siendo retenidos.

## Beneficios de usar Heap Snapshots

- Detecta fugas de memoria observando si los objetos no se eliminan cuando deberían.
- Optimiza la gestión de memoria para mejorar el rendimiento y la eficiencia.
