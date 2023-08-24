export function createXml(key: string, name: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
  targetNamespace="BTHOME"
  id="Definitions_${key}">
  <bpmn:process id="${key}" name="${name}" isExecutable="true"></bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="${key}"></bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
}

export function createBpmnXml() {
  const timestamp = Date.now();
  const newID = `Process_${timestamp}`;
  const newName = `业务流程_${timestamp}`;
  const xml = createXml(newID, newName);
  return xml;
}

export function readFile(fn: (v: string | ArrayBuffer) => void) {
  const ipt = document.createElement("input");
  ipt.addEventListener("change", (e) => {
    const file: File = (e.target as any).files[0];
    const reader = new FileReader();
    reader.onload = (t) => {
      const value = t.target.result;
      fn(value);
      document.body.removeChild(ipt);
    };
    reader.readAsText(file);
  });
  ipt.setAttribute("type", "file");
  ipt.style.display = "none";
  document.body.appendChild(ipt);
  ipt.click();
}

export function downloadFile(text, filename = `${Date.now()}.bpmn`) {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
