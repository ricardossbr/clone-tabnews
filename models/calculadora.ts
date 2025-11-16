function somar(numero, numero2) {
  if (
    typeof numero == "string" ||
    typeof numero2 == "string" ||
    numero == null ||
    numero2 == null
  )
    return "error";
  return numero + numero2;
}

exports.somar = somar;
