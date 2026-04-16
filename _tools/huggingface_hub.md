---
title: "Hugging Face Hub"
summary: "Plataforma centralizada para compartir, descubrir y desplegar modelos, datasets y demos de IA."
resource_url: https://huggingface.co
rating: 5
tags:
  - plataforma
---

El **Hugging Face Hub** es el mayor repositorio público de modelos y datasets de inteligencia artificial. Actúa como el "GitHub de la IA": cualquiera puede subir modelos, datasets y Spaces (aplicaciones demo), y la comunidad puede explorarlos, evaluarlos y reutilizarlos.

## Qué contiene

- **Modelos**: más de 300 000 modelos preentrenados filtrables por tarea, lengua, licencia y framework.
- **Datasets**: repositorio de datasets listos para cargar con la librería `datasets`.
- **Spaces**: demos interactivas construidas con Gradio o Streamlit.

## Acceso programático

```python
from huggingface_hub import hf_hub_download

path = hf_hub_download(repo_id="dccuchile/bert-base-spanish-wwm-cased", filename="config.json")
```

## Por qué es relevante para PLN en español

Alberga los principales modelos en español: BETO, RoBERTa-es, MarIA, RigoBERTa, pysentimiento y muchos más.
