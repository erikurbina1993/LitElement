import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {
static get properties() {
    return {
      nombre: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.nombre = "Usuario";
  }

    CambiaUsuario() {
    this.nombre = "Erik";
  }


  

  render() {
    return html`
      <p>Soy My Element</p>
      <p>Clics Bienvenido: ${this.nombre}</p>
      <button @click="${this.CambiaUsuario}">Haz click</a>
      <input 
      type="text" 
      id="email" 

  >
    `;
  }

  
}

customElements.define('my-element', MyElement);