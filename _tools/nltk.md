---
title: "NLTK"
summary: "Plataforma clásica de Python para trabajar con datos de lenguaje humano, ideal para aprendizaje."
resource_url: https://www.nltk.org
tutorial_url: https://www.nltk.org/book/
rating: 3
tags:
  - librería
---

**NLTK** (Natural Language Toolkit) es una de las librerías PLN más antiguas y completas para Python. Aunque ha sido superada en velocidad por alternativas modernas, sigue siendo un recurso de referencia para aprender los fundamentos del PLN y para tareas de investigación.

## Características principales

- Tokenización, stemming, lematización, etiquetado POS y parsing.
- Acceso a más de 50 corpora y recursos léxicos (WordNet, etc.).
- Clasificadores básicos: Naive Bayes, MaxEnt.
- Documentación extensa y libro gratuito online.

## Instalación

```bash
pip install nltk
```

## Uso básico

```python
import nltk
nltk.download('punkt')

from nltk.tokenize import word_tokenize
tokens = word_tokenize("El PLN es fascinante.", language="spanish")
print(tokens)
```

## Cuándo usarlo

Es ideal para introducirse al PLN o para experimentos rápidos. Para producción o rendimiento alto, se recomienda spaCy o Transformers.
