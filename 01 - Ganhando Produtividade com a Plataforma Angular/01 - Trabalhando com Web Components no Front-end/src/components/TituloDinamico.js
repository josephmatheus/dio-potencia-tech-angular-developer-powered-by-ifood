class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // base componente <h1>Joseph</h1>
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = "Joseph";

    // estiliza o componente
    const style = document.createElement("style");
    style.textContent = `
        h1 {
            color: red;
        }
    `;

    // enviar para a shadow
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
