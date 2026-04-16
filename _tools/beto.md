---
title: "BETO"
summary: "Modelo BERT preentrenado en español, referencia para tareas de comprensión del lenguaje en español."
resource_url: https://huggingface.co/dccuchile/bert-base-spanish-wwm-cased
rating: 4
tags:
  - modelo
---

**BETO** es un modelo BERT entrenado exclusivamente en texto en español por el DCC de la Universidad de Chile. Durante años ha sido el modelo base de referencia para tareas de PLN en español, y sigue siendo una opción sólida y bien documentada.

## Variantes disponibles

| Modelo | Descripción |
|--------|-------------|
| `bert-base-spanish-wwm-cased` | Case-sensitive con Whole Word Masking |
| `bert-base-spanish-wwm-uncased` | Case-insensitive con Whole Word Masking |

## Datos de entrenamiento

Entrenado sobre el dump de Wikipedia en español (~3 000 millones de palabras).

## Uso con Transformers

```python
from transformers import BertTokenizer, BertModel

tokenizer = BertTokenizer.from_pretrained("dccuchile/bert-base-spanish-wwm-cased")
model = BertModel.from_pretrained("dccuchile/bert-base-spanish-wwm-cased")

inputs = tokenizer("El PLN en español avanza rápidamente.", return_tensors="pt")
outputs = model(**inputs)
```

## Alternativas más modernas

Para tareas que requieren mayor capacidad, considerar RoBERTa-es (MarIA) o modelos multilingües como XLM-RoBERTa.
