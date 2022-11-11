<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="manifest" href="manifest.json" />
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#6366f1" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111827" />
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        <style>
            .add-button {
  position: absolute;
  top: 1px;
  left: 1px;
  color: white;
  z-index: 99;
}
        </style>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <button class="add-button">Add to home screen</button>

        @inertia

        <script>
            if (typeof navigator.serviceWorker !== 'undefined') {
              navigator.serviceWorker.register('sw.js')
            }
          </script>
    </body>
</html>
