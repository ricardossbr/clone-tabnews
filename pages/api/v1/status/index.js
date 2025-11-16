var status = (resquest, response) => {
  response.status(200).json({ chave: "hello world!" });
};

export default status;
