# Toolbox PLN — Circuigramas

Repositorio de herramientas para el Procesamiento del Lenguaje Natural, publicado en GitHub Pages.

Visita el sitio: https://circuigramas.github.io/toolbox/

---

## Tags disponibles

- **librería** — librerías Python u otros lenguajes para PLN
- **dataset** — corpus y conjuntos de datos anotados
- **modelo** — modelos preentrenados (BERT, GPT, etc.)
- **plataforma** — plataformas y hubs de recursos
- **API** — servicios y APIs externas
- **framework** — frameworks de entrenamiento o despliegue

---

## Cómo agregar una nueva herramienta

1. Crea un archivo `.md` dentro de la carpeta `_tools/`. El nombre del archivo será la URL de la herramienta (por ejemplo, `word2vec.md` → `/tools/word2vec/`). Usa `_` para separar palabras en el nombre del archivo.

2. Agrega el siguiente bloque de metadatos al inicio del archivo:

```yaml
---
title: "Nombre de la herramienta"
summary: "Descripción breve de una o dos oraciones."
resource_url: https://enlace-al-recurso.com
circuigramas_url: https://circuigramas.github.io/...   # opcional
tutorial_url: https://enlace-tutorial.com              # opcional
rating: 4                                              # 1 a 5 estrellas
tags:
  - librería
---
```

- `resource_url` es el enlace principal a la herramienta (requerido).
- `circuigramas_url` enlaza a una reseña o artículo de Circuigramas sobre la herramienta (opcional).
- `tutorial_url` enlaza a un tutorial o guía de inicio (opcional).
- `rating` es una valoración del 1 al 5.
- `tags` determina los filtros disponibles en la página principal; intenta usar el mínimo necesario.

3. Debajo del bloque de metadatos, escribe la descripción extendida en Markdown.

4. Guarda el archivo, haz commit y push a la rama `main`. GitHub Pages publicará el cambio automáticamente.

### Ejemplo mínimo

```markdown
---
title: "FastText"
summary: "Librería de Facebook para embeddings de palabras y clasificación de texto eficiente."
resource_url: https://fasttext.cc
rating: 4
tags:
  - librería
---

**FastText** extiende Word2Vec representando cada palabra como una bolsa de n-gramas de caracteres,
lo que le permite manejar palabras fuera de vocabulario y funciona especialmente bien en morfologías ricas.
```
