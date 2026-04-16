---
title: "spaCy"
summary: "Librería de PLN industrial para Python, rápida y lista para producción."
resource_url: https://spacy.io
tutorial_url: https://spacy.io/usage/spacy-101
rating: 5
tags:
  - librería
---

**spaCy** es una de las librerías de PLN más populares para Python. Está diseñada para uso en producción y destaca por su velocidad y facilidad de integración.

## Características principales

- Tokenización, etiquetado POS, parsing de dependencias y NER listos para usar.
- Soporte para más de 60 idiomas, incluido el español.
- Integración sencilla con modelos transformer via `spacy-transformers`.
- Pipelines personalizables y entrenables.

## Instalación

```bash
pip install spacy
python -m spacy download es_core_news_sm
```

## Uso básico

```python
import spacy

nlp = spacy.load("es_core_news_sm")
doc = nlp("El Banco de España subió los tipos de interés.")
for ent in doc.ents:
    print(ent.text, ent.label_)
```
