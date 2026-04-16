---
title: "Hugging Face Transformers"
summary: "Librería de referencia para modelos transformer preentrenados: BERT, GPT, T5 y cientos más."
resource_url: https://huggingface.co/docs/transformers
tutorial_url: https://huggingface.co/learn/nlp-course
rating: 5
tags:
  - librería
---

**Transformers** de Hugging Face es la librería más utilizada para trabajar con modelos de lenguaje preentrenados. Permite cargar, ajustar y desplegar modelos como BERT, RoBERTa, GPT-2/3, T5, LLaMA y muchos más con pocas líneas de código.

## Características principales

- Acceso a más de 300 000 modelos en el Hub de Hugging Face.
- Pipelines de alto nivel para tareas comunes: clasificación, NER, QA, traducción, resumen…
- Compatible con PyTorch y TensorFlow.
- Integración con `datasets`, `peft`, `accelerate` y `evaluate`.

## Instalación

```bash
pip install transformers
```

## Uso básico

```python
from transformers import pipeline

clasificador = pipeline("sentiment-analysis", model="pysentimiento/robertuito-sentiment-analysis")
resultado = clasificador("Me encanta el procesamiento del lenguaje natural")
print(resultado)
```
