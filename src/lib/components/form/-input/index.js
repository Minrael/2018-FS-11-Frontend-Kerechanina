import styles from './index.css';
import shadowStyles from './shadow.css';

const template = `
	<style>${shadowStyles.toString()}</style>
	<input type = "text">
	<button id = "submit"><img src="../../static/mailsend_104372.png"></button>
	<label for="attach" class="attachButton">
		<img src="../../static/attach-rotated_icon-icons.com_68593.png">
	</label>
	<input type="file" id="attach" name="input" style="display:none">
	<button id="geoposition">
		<img src="../../static/locationmarker_102659.png ">
	</button>
`;


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
		var button = this.shadowRoot.querySelector('button');
		var geoButton = this.shadowRoot.querySelector('geoposition');
		this.appendChild(hiddenInput);
		this._elements = {
			input: input,
			hiddenInput: hiddenInput,
			button: button,
			geoButton: geoButton
		};
	}


	_addHandlers () {
		this._elements.input.addEventListener('input', this._onInput.bind(this));
		this._elements.button.addEventListener('click', this._onInput.bind(this));
		this._elements.geoButton.addEventListener('click', this._geoposition.bind(this));
	}

	_onInput () {
		this._elements.hiddenInput.value = this._elements.input.value;
	}
}

customElements.define('form-input', FormInput);
