import { createApp } from 'vue'

export const buildWc = (elementName, baseVueComponent) => {
  if (typeof window === 'undefined') return
  if (!customElements.get(elementName)) customElements.define(elementName, class extends HTMLElement {
    connectedCallback() {
      const warp = `<link rel="stylesheet" type="text/css" href='https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css' />`
      const uno = `<link rel="stylesheet" type="text/css" href='https://assets.finn.no/pkg/@warp-ds/component-classes/v1/common.css' />`
      const target = `<div id="app" class="mt-16"></div>`
      this.shadow = this.attachShadow({ mode: 'open' })
      this.shadow.innerHTML = warp + uno + target    
      createApp(baseVueComponent).mount(this.appEl)

      this.shadow.addEventListener("click", () => {
        if (window.theme) {
          const stylesheets = this.shadow.querySelectorAll('link');
          stylesheets[0].href =`https://assets.finn.no/pkg/@warp-ds/tokens/v1/${window.theme}.css`;
        }
      });
    }
    get appEl() {
      return this.shadow.querySelector('#app')
    }
  })
}