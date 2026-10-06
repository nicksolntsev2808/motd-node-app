# motd-node-app

Задача 24: Node.js, Express + вспомогательный модуль с настройками.

### Структура
```
├── package.json
├── package-lock.json
├── settings.js   # константы SERVICE_NAME, ENVIRONMENT, OWNER
└── server.js     # основной Express-файл, подключает settings.js
```

### Задание
Напишите `Dockerfile` для этого приложения:
1. Базовый образ `node:22-slim`
2. `WORKDIR`
3. Двухшаговый `COPY` — сначала `package.json` и `package-lock.json`, затем `RUN npm ci --omit=dev`
4. Затем **оба** файла кода (`server.js` и `settings.js`) одной строкой `COPY`
5. `CMD` для запуска

### Сборка и запуск
```bash
docker build -t motd-node-image .
docker run -d --name motd-node-1 -p 6090:6090 motd-node-image
```

### Проверка
```bash
curl http://127.0.0.1:6090/
curl http://127.0.0.1:6090/health
```

Ожидаемый ответ:
```
Status Board [staging] — владелец: platform-team
ok
```
