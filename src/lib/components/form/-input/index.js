import styles from './index.css';
import shadowStyles from './shadow.css';

const template = `
	<style>${shadowStyles.toString()}</style>
	<input />
	<attach_button><img src="https://icon-icons.com/icon/attach-rotated/68593"></attach_button>
	<slot name="icon"></slot>
`;


//../../../../../../static/attach-rotated_icon-icons.com_68593.png

//const iconTemplate = `
//	<div class="${styles.icon}" />
//`;

class FormInput extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}

	static get observedAttributes() {
		return [
			"name",
			"placeholder",
			"value",
			"disabled"
		]
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this._elements.input[attrName] = newVal;
	}

	_initElements () {
		var hiddenInput = document.createElement('input');
		var input = this.shadowRoot.querySelector('input');
		var attach_button = this.shadowRoot.querySelector('attach_button');
		this.appendChild(hiddenInput);
		this._elements = {
			input: input,
			hiddenInput: hiddenInput,
			attach_button: attach_button
		};
	}

	_addHandlers () {
		this._elements.input.addEventListener('input', this._onInput.bind(this));
		/*this._elements.attach_button.addEventListener('click', this._onAttach.bind(this));*/
	}

	_onInput () {
		this._elements.hiddenInput.value = this._elements.input.value;
	}
}

customElements.define('form-input', FormInput);
