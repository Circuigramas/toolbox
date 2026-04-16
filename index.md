---
layout: default
title: Toolbox PLN
permalink: /
---

<div class="search-bar">
  <input type="search" id="search" placeholder="Buscar herramienta..." autocomplete="off" />
</div>

<div class="tag-filters" id="tag-filters">
  <button class="tag-btn active" data-tag="">Todas</button>
  {% assign all_tags = site.tools | map: "tags" | join: "," | split: "," | uniq | sort %}
  {% for tag in all_tags %}
    <button class="tag-btn" data-tag="{{ tag | strip | escape }}">{{ tag | strip }}</button>
  {% endfor %}
</div>

<div class="list-container">
  <p class="count" id="count"></p>
  <div id="results"></div>
</div>

<script id="tools-data" type="application/json">
[
  {% assign sorted_tools = site.tools | sort: "title" %}
  {% for tool in sorted_tools %}
    {
      "title":           {{ tool.title           | jsonify }},
      "summary":         {{ tool.summary         | default: "" | jsonify }},
      "tags":            {{ tool.tags            | default: [] | jsonify }},
      "rating":          {{ tool.rating          | default: 0  | jsonify }},
      "resource_url":    {{ tool.resource_url    | default: "" | jsonify }},
      "circuigramas_url":{{ tool.circuigramas_url| default: "" | jsonify }},
      "tutorial_url":    {{ tool.tutorial_url    | default: "" | jsonify }}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
]
</script>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
