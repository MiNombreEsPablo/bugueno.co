# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`bugueno.co` is a static personal "linktree" page (Pablo Bugueño / MiNombreEsPablo) — a single HTML file with social links, deployed via GitHub Pages (`CNAME` maps the custom domain).

## Development

There is no build system, package manager, or test suite. It's plain static HTML/CSS.

- Preview locally by opening `index.html` directly in a browser, or serving the directory with any static file server (e.g. `python3 -m http.server`).
- Deployment is automatic via GitHub Pages on push to the default branch — no build/deploy commands to run.

## Architecture

- `index.html` — the entire page: profile image/name header, a `.links-container` of social/donation links (YouTube, Instagram, Streamlabs, Twitch, Twitter), and a footer. Icons come from Font Awesome (loaded via kit script tag) and `feather-icons` (loaded from unpkg, initialized via `feather.replace()` at the bottom of the page).
- `css/w3.css` and `css/w3-theme.css` — the vendored W3.CSS framework and its purple theme; used for buttons/layout classes (`w3-button`, `w3-round-xlarge`, `w3-theme-l1`, etc.). Page-specific overrides live in the `<style>` block inside `index.html` rather than in the CSS files.
- `CNAME` — custom domain (`bugueno.co`) for GitHub Pages.

To add or change a link, edit the `.links-container` block in `index.html` directly (icon class + href); there is no templating.
