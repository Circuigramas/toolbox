---
title: "Stanza"
summary: "Librería NLP de Stanford con modelos neuronales precisos para más de 70 idiomas."
resource_url: https://stanfordnlp.github.io/stanza/
tutorial_url: https://stanfordnlp.github.io/stanza/tutorials.html
rating: 4
tags:
  - librería
---

**Stanza** es la librería NLP de Stanford que ofrece modelos neuronales de alta precisión para una amplia variedad de lenguas, incluyendo el español. Es la continuación moderna de CoreNLP adaptada a Python y pipelines modernos.

## Características principales

- Tokenización, segmentación de oraciones, POS, lematización, NER y parsing.
- Modelos entrenados sobre corpora Universal Dependencies para más de 70 idiomas.
- Interfaz Python sencilla con pipeline unificado.
- Integración con spaCy via `spacy-stanza`.

## Instalación

```bash
pip install stanza
```

## Uso básico

```python
import stanza

stanza.download('es')
nlp = stanza.Pipeline('es')
doc = nlp("El presidente firmó el decreto en Madrid.")
for sent in doc.sentences:
    for word in sent.words:
        print(word.text, word.upos, word.lemma)
```
