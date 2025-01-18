---
layout: page
title: Posts in this blog
permalink: /blog/
---

Hello, welcome to my blog! Here contains all posts I've written for this blog.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} | Posted on: {{ post.date | date: "%A, %d of %b of %Y" }}</a>
    </li>
  {% endfor %}
</ul>