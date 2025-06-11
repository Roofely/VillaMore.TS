const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// السماح لـ Express بعرض الملفات في مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <title>VillaMore</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #111;
          font-family: 'Segoe UI', sans-serif;
          color: white;
        }
        img {
          width: 250px;
          margin-bottom: 30px;
        }
        h1 {
          font-size: 2.5em;
          color: gold;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <img src="/images/logo.png" alt="VillaMore Logo" />
      <h1>👋 Bonjour et bienvenue sur VillaMore !</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Le serveur VillaMore est démarré sur : http://localhost:${PORT}`);
});
