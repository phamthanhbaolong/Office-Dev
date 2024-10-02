Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    document.getElementById("myButton").onclick = () => {
      alert("Hello, Office Add-in!");
    };
  }
});
