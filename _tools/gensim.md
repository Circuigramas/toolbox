---
title: "Gensim"
summary: "Librería Python para modelado de tópicos y representaciones vectoriales de texto a gran escala."
resource_url: https://radimrehurek.com/gensim/
tutorial_url: https://radimrehurek.com/gensim/auto_examples/index.html
rating: 4
tags:
  - librería
---

**Gensim** es una librería Python especializada en representaciones semánticas no supervisadas de texto. Es la referencia para entrenar embeddings de palabras (Word2Vec, FastText, GloVe) y modelos de tópicos (LDA, LSA).

## Características principales

- Word2Vec, FastText y Doc2Vec propios.
- LDA (Latent Dirichlet Allocation) y LSA/LSI.
- Procesamiento de corpora grandes mediante streaming (sin cargar todo en memoria).
- Similitud semántica entre documentos.

## Instalación

```bash
pip install gensim
```

## Uso básico: Word2Vec

```python
from gensim.models import Word2Vec

oraciones = [["gato", "perro", "animal"], ["python", "código", "programa"]]
modelo = Word2Vec(oraciones, vector_size=100, window=5, min_count=1)
similares = modelo.wv.most_similar("gato", topn=3)
print(similares)
```
