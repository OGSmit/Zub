# ZubTour - Landing Page

Лендинг для стоматологического туризма в Нячанге.

## Технологии

- **Nuxt 3** - Vue 3 фреймворк
- **TypeScript** - Типизация
- **SCSS** - Стилизация с системой breakpoints

## Деплой на GitHub Pages

Проект настроен на автоматический деплой на GitHub Pages. Подробная инструкция в файле [DEPLOY.md](./DEPLOY.md).

**Быстрый старт:**
1. Создайте репозиторий на GitHub
2. Обновите `baseURL` в `nuxt.config.ts` (замените 'Zub' на имя вашего репозитория)
3. Запушьте код в ветку `main`
4. Включите GitHub Pages в настройках репозитория (ветка `gh-pages`)

## Установка

```bash
npm install
```

## Разработка

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

## Сборка

```bash
npm run build
```

## Структура проекта

```
Zub/
├── assets/
│   └── styles/
│       └── main.scss          # Глобальные стили и переменные
├── components/
│   ├── AppHeader.vue          # Хедер сайта
│   ├── HeroSection.vue        # Главная секция с призывом к действию
│   ├── HowItWorksSection.vue  # Секция "Как это работает"
│   ├── TestimonialsSection.vue # Секция с отзывами
│   └── WhatIncludedSection.vue # Секция "Что входит"
├── pages/
│   └── index.vue              # Главная страница
├── app.vue                    # Корневой компонент
├── nuxt.config.ts             # Конфигурация Nuxt
└── package.json
```

## Адаптивность

Проект использует систему breakpoints:
- **Mobile**: до 480px
- **Tablet**: 480px - 768px
- **Desktop**: от 768px
- **Wide**: от 1440px

## Цветовая схема

- **Primary**: #4A90E2 (светло-синий)
- **Accent**: #FF6B4A (оранжево-красный)
- **Success**: #4CAF50 (зеленый)

## Заметки

- Изображения нужно добавить в соответствующие компоненты
- Placeholder'ы для изображений готовы к замене
- Все компоненты адаптивны и готовы к использованию
