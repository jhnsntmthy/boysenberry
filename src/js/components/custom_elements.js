import 'skatejs-web-components';
import * as skate from 'skatejs';

customElements.define('x-hello', class extends skate.Component {
  static get props () {
    return {
      name: { attribute: true }
    };
  }
  renderCallback () {
    return skate.h('div', `Hello, ${this.name}`);
  }
});

customElements.define('slim-column', class extends skate.Component {
  static get props () {
    return {
    };
  }
  renderCallback () {
    return  skate.h('div', { class: 'container'},
            skate.h('div', { class: 'row'},
            skate.h('div', { class: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'},
            skate.h('slot'))));
  }
});

customElements.define('fat-column', class extends skate.Component {
  static get props () {
    return {
    };
  }
  renderCallback () {
    return  skate.h('div', { class: 'container'},
            skate.h('div', { class: 'row'},
            skate.h('div', { class: 'col-lg-12 col-md-12'},
            skate.h('slot'))));
  }
});
