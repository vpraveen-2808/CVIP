function compileCode() {
  var htmlCode = document.getElementById("html-code").value;
  var cssCode = document.getElementById("css-code").value;
  var jsCode = document.getElementById("js-code").value;
  var output = document.getElementById("output").contentWindow.document;

  output.open();
  output.writeln(htmlCode + '<style>' + cssCode + '</style><script>' + jsCode + '</script>');
  output.close();
}
