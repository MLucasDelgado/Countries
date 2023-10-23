const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getCountry } = require("./src/utils/conexion");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  await getCountry()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
