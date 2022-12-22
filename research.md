# Lazy Load research

### ENV variables
Для опционального билда частей проекта можно использовать env-переменные webpack и dotenv.

[Документация webpack env variables](https://webpack.js.org/guides/environment-variables/)
[Статья про работу с ENV переменными в webpack](https://prateeksurana.me/blog/using-environment-variables-with-webpack/)

Получаем возможность:
1. Динамическая сборка чанков кода, обфускация гарантирует затруднение реверс-инжиниринга
2. Не нужно дополнительных пакетов - конфигурация вебпака из коробки
3. На уровне сборки будут выставляться нужные флаги и вебпак будет выкидывать из бандла лишние куски:

```
if (process.env.VIEW_ONLY === 0) { // превратится в if (false) и не попадет в чанк
  return <EditComponent />
}
```

### Исследование:

Завели демо-проект [webpack-env-demo](), где завели env-переменную `OPT` и реакт-компоненты `<RegularComponent />` (рендерится всегда) и `<OptionalComponent />` (рендерится только если в env есть перменная OPT=1)
При разных вариантах сборки - рендерится либо первый, либо второй вариант.

Для разделения на чанки можно использовать ленивую подрузку компонентов через `const LazyComponent = React.lazy(() => import('PATH'))` [Статья](https://www.debugbear.com/blog/bundle-splitting-components-with-webpack-and-react)
Без `React.lazy` выкидывать некомпилируемые модули не получилось - возможно неправильно настроили webpack, либо он отказался выкидывать чанки маленького размера.



