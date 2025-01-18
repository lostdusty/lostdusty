---
layout: page
title: About
permalink: /about/
---
{% assign birth_year = 2005 %}
{% assign birth_month = 12 %}
{% assign birth_day = 8 %}

{% assign current_year = 'now' | date: "%Y" | plus: 0 %}
{% assign current_month = 'now' | date: "%m" | plus: 0 %}
{% assign current_day = 'now' | date: "%d" | plus: 0 %}

{% assign age = current_year | minus: birth_year %}
{% if current_month < birth_month %}
  {% assign age = age | minus: 1 %}
{% elsif current_month == birth_month %}
  {% if current_day < birth_day %}
    {% assign age = age | minus: 1 %}
  {% endif %}
{% endif %}

Hello internet visitor! This is my personal blog that will contain knowledge I think that could be useful for other people. There will be posts in both english and portuguese. But first, let me explain you how things are organized here:

## What is {{ site.url | remove: "https://" }}?

This is my home on the internet. The domain you are now contains my personal website & blog.
There is also other sub-domains, as:

- [estudos.lostdusty.dev.br](https://estudos.lostdusty.dev.br): My study website

## My projets

Here are some projects I've worked myself, or helped others:

- [Fast Forward](https://fastforward.team) ([repo](https://github.com/fastforwardteam/fastforwad)): Skip annoying link shortners, saving you time;
- [cobalt-cli](https://github.com/lostdusty/cobalt): Download your media with ease, cutting the annoyance, directly from the command line;
- [Coal](https://github.com/lostdusty/coal): Mobile/Desktop application for cobalt.tools;
- [DataRU's backend](https://dataru-ufu.com.br): Backend server for collecting and analysing my university restaurant quality.

## About the author

My name is Rebecca, and I am {{ age }} years old. I'm currently studying Information Systems in Brazil and I love having fun with code and computers. I do coding, modding, reverse engineering and computers on cardboard boxes.

### Friends

(link webring).
