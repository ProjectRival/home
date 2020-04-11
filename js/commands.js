function copiar() {
    var copyText = document.getElementById("texto");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }