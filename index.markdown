---
layout: default
title: Dewired - A Blog by Gaurav Sharma
---

{% for post in site.posts %}

<ul class="list-style-none">
  <li>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    {{ post.excerpt }}
  </li>
</ul>

{% endfor %}
