var http = require('http'); // Необходимый модуль

// Создание сервера
var server = http.createServer(function(req, res) {
  // Указание заголовков (тип данных и кодировка)
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  // Текст, который будет отображен на странице
  res.end('Обычный текст без HTML');
});
// server - переменная созданная ранее
server.listen(3000, '127.0.0.1');
console.log ("Мы отслеживаем порт 3000");
