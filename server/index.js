const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getInformation } = require("./src/utils/conexion");
const PORT = 10000;
const host = "0.0.0.0";

conn.sync({ force: true }).then(() => {
server.listen(PORT, host, async () => {
  await getInformation()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
