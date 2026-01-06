import database from "infra/database.js";

var status = async (resquest, response) => {
  const updateAt = new Date().toISOString();

  const versionDatabase = await database.query("SHOW server_version;");
  const dbVersion =
    versionDatabase.rows && versionDatabase.rows[0].server_version;

  const max_connections = await database.query("SHOW max_connections;");
  const maxConnections =
    max_connections.rows && max_connections.rows[0].max_connections;

  // conta conexões para o banco atual
  const connRes = await database.query(
    "SELECT COUNT(*) AS total_connections FROM pg_stat_activity WHERE datname = current_database();",
  );
  const connections =
    connRes.rows && connRes.rows[0]
      ? Number(connRes.rows[0].total_connections)
      : null;

  response.status(200).json({
    update_at: updateAt,
    dependeces: {
      database: {
        version: dbVersion,
        max_connections: database.maxConnections,
        connections: connections,
      },
    },
  });

  console.log(
    `[STATUS] ${updateAt} - DB Version: ${dbVersion} - Connections: ${connections} - Max Connections: ${maxConnections}`,
  );
};

export default status;
