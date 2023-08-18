//import { LitElement, html } from 'lit-element';
import {LitElement, html} from 'lit';
export class MyDispatcher extends LitElement {
 static get _input() {
    return (this.___input ??= this.renderRoot?.querySelector('input') ?? null);
  }
  render() {
    return html`
      <p>Nombre: <input></p>
      <p><button @click=${this._dispatchLogin}>Login</button></p>
    `;
  }
  _dispatchLogin() {
    const nombre = this._input.value.trim();
    if (nombre) {
      const options = {
        detail: {nombre},
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent('mylogin', options));
    }
  }
}
customElements.define('my-dispatcher', MyDispatcher);