---
title: "STILL — Spanish Treebank with Integrated Lemmas and Labels"
summary: "Corpus de dependencias del español anotado con lemas, POS y dependencias sintácticas."
resource_url: https://universaldependencies.org/treebanks/es_still/
rating: 4
tags:
  - dataset
---

**STILL** (Spanish Treebank with Integrated Lemmas and Labels) es un corpus de dependencias del español incluido en el proyecto **Universal Dependencies**. Contiene oraciones en español con anotaciones morfológicas y sintácticas en el formato UD, lo que lo hace interoperable con parsers y herramientas de múltiples lenguas.

## Contenido

- Oraciones del español peninsular extraídas de diversas fuentes.
- Anotaciones: lema, categoría morfosintáctica (UPOS/XPOS), rasgos morfológicos y árbol de dependencias.
- Compatible con el formato CoNLL-U.

## Casos de uso

- Entrenamiento y evaluación de parsers de dependencias.
- Investigación en lingüística computacional.
- Benchmarking de modelos de análisis morfosintáctico.

## Acceso

El corpus puede descargarse directamente desde el repositorio de Universal Dependencies o mediante la librería `datasets` de Hugging Face.

```python
from datasets import load_dataset
ds = load_dataset("universal_dependencies", "es_still")
```
