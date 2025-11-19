import database from "../../../../infra/database.js";

var status = async (resquest, response) => {
  const result = await database.query("SELECT 1+1 as SOMA;");
  console.log(result);
  response.status(200).json({ chave: "hello world!" });
};

export default status;
