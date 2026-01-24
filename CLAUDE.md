# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marriage Booklet is a Ruby on Rails 7 web application for managing Catholic wedding ceremony booklets. Users (brides, grooms, celebrants, guests) can create and manage wedding projects with ceremony details, attendees, and wedding party members.

**Stack:** Ruby 3.2.9, Rails 7.0.4, PostgreSQL (UUID primary keys), Tailwind CSS, Hotwire (Turbo + Stimulus), ImportMap, Redis

## Common Commands

```bash
# Development server (Rails + Tailwind CSS watcher via Foreman)
bin/dev

# Install dependencies
bundle install

# Database setup/reset
bundle exec rails db:setup
bundle exec rails db:reset

# Run all tests (Minitest)
bundle exec rails test

# Run a single test file
bundle exec rails test test/models/user_test.rb

# Run a single test by line number
bundle exec rails test test/models/user_test.rb:10

# Run system tests (Capybara + Selenium)
bundle exec rails test:system

# Run RSpec i18n validation tests
bundle exec rspec spec/

# i18n management
bundle exec i18n-tasks missing
bundle exec i18n-tasks unused
bundle exec i18n-tasks normalize
bundle exec i18n-tasks check-consistent-interpolations

# Asset compilation
bundle exec rails tailwindcss:build
bundle exec rails assets:precompile
```

## Architecture

### Routing

All resource routes are scoped under `/:locale` (en, it, es). The `ApplicationController` handles locale switching via `around_action`. Default locale is English.

### Models & Associations

- **User** `has_and_belongs_to_many :projects` — roles: bride, groom, celebrant, guest
- **Project** `has_and_belongs_to_many :users`, `has_many :wedding_party_members` — liturgy types: withMass, withoutMass, catholicNonCatholic
- **WeddingPartyMember** `belongs_to :project` — 20 role types, 20 relationship types

All models use UUID primary keys. Enums use `_prefix: true` (e.g., `role_bride?`, `liturgy_withMass?`).

### Authentication

Session-based auth using `bcrypt` / `has_secure_password`. Simple `session[:user_id]` checks in controllers. No token-based auth.

### i18n

Three locales: `config/locales/{en,es,it}.yml`. Custom i18n-tasks scanners in `lib/tasks/`:
- `scan_model_enums.rb` — scans enum definitions for translation keys
- `scan_resource_form_labels.rb` — scans form label translations

The `spec/i18n_spec.rb` RSpec test validates missing keys, unused keys, normalization, and interpolation consistency.

### Frontend

- Tailwind CSS (via `tailwindcss-rails` gem, config in `config/tailwind.config.js`)
- JavaScript via ImportMap + Stimulus controllers in `app/javascript/controllers/`
- Turbo Drive for SPA-like navigation
- Google Fonts: Tangerine, EB Garamond, Pinyon Script
- Dark theme (bg-black, text-blue-400)

### API Responses

Controllers respond to both HTML and JSON formats. JBuilder templates in views handle JSON serialization.

### Nested Attributes

Projects accept nested attributes for users and wedding_party_members with `allow_destroy: true`, enabling multi-record form submissions.

## Docker Services

`docker-compose.yml` provides PostgreSQL 18, Redis 7, and Adminer. Credentials configurable via env vars:
- `MARRIAGE_BOOKLET_DATABASE_USER` (default: marriage_booklet)
- `MARRIAGE_BOOKLET_DATABASE_PASSWORD` (default: password)
- `ADMINER_PORT` (default: 8080)

## CI

GitHub Actions (`verify.yml`): Sets up Ruby 3.2.9, Node.js 18, PostgreSQL 15 service, resets test DB, precompiles assets, runs `rails test`.
