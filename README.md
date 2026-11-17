# Практичне заняття 9. Створення Dockerfile для Node.js-застосунку

**Автор:** Литвинов Нікіта (група КН41)  
**Працюючий застосунок на AWS EC2:** http://50.17.148  
**Образ у Docker Hub:** https://docker.com  

## Опис проєкту
Веб-застосунок на базі **Node.js**, запакований у Docker-контейнер на основі офіційного образу `node:lts`. Автоматична збірка образу з тегуванням за коротким хешем коміту (`git rev-parse --short HEAD`), публікація в Docker Hub та розгортання на сервері **AWS EC2** налаштовані через **GitHub Actions** (`.github/workflows/ci.yml`).

## Структура репозиторію
* `index.js` — HTTP-сервер Node.js, що працює на порту `3000` (`0.0.0.0`).
* `package.json` — конфігурація та залежності проєкту.
* `Dockerfile` — інструкції для побудови Docker-образу з кешуванням шару залежностей.
* `.dockerignore` — виключення зайвих файлів (`node_modules`, `.env`, `.git`) під час збірки.
* `.github/workflows/ci.yml` — CI/CD пайплайн для автоматичної збірки, пушу в Docker Hub та деплою на EC2.

## Локальний запуск у Docker

1. Зібрати Docker-образ із тегом поточного коміту:
   ```bash
   docker build -t nikitaboomerov/nodeapp:\$(git rev-parse --short HEAD) .
   ```

2. Запустити контейнер:
   ```bash
   docker run -d --name nodeapp -p 3000:3000 nikitaboomerov/nodeapp:latest
   ```
