---
layout: default
title: Blog - A Blog by Gaurav Sharma
---


<ul class="list-group list-group-flush">
  {% for post in site.posts %}
  <li class="list-group-item bg-body">
    <small class="text-muted">{{ post.date | date_to_string }}</small>
    <p class="h5"><a href="{{ post.url }}">{{ post.title }}</a></p>
    <!-- <small>{{ post.excerpt }}</small> -->
  </li>
  {% endfor %}
</ul>