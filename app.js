require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/db.config')();

// Instância do servidor
const app = express();

// Configuração para o Express usar JSON
app.use(express.json());

// Configuração do CORS para aceitar requisições de qualquer lugar
app.use(cors({ origin: '*' }));

// Instância da base de dados
require('./config/passport.config')(app);

// Rotas da API
const userRouter = require('./routes/user.routes');
app.use('/api', userRouter);

// Setup da porta
app.listen(process.env.PORT, () => {
  console.log(`Server up an running on PORT ${process.env.PORT}`);
});
