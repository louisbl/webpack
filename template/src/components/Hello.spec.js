import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as VueServerRenderer from 'vue-server-renderer'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from './Hello.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Hello){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toBe('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  it('renders to a nice snapshot', () => {
    const renderer = VueServerRenderer.createRenderer(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Hello){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    renderer.renderToString(vm, (err, str) => {
      expect(err).toBeNull(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      expect(str).toMatchSnapshot(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
