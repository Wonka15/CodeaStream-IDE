function runCode() {
  const code = document.getElementById("editor").value;
  const outputFrame = document.getElementById("output");
  outputFrame.srcdoc = code;
}

document.getElementById("fileInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("editor").value = e.target.result;
    };
    reader.readAsText(file);
  }
});
