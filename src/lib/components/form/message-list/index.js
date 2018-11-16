//import styles from './index.css';
import shadowStyles from './shadow.css';

const slotName = 'message-input';

const template = `
	<style>${shadowStyles.toString()}

	</style>
	<form>
		<div class="result"></div>
		<div class="friend_message">"Hello!"</div>

		<form-input name="message_text" placeholder="Введите сообщеине" slot="message-input">
			<span slot="icon"></span>
		</form-input>
	</form>
`;

class MessageList extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}

	static get observedAttributes() {
		return [
			"action",
			"method"
		]
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this._elements.form[attrName] = newVal;
	}

	_initElements () {
		var form = this.shadowRoot.querySelector('form');
		var message = this.shadowRoot.querySelector('.result');

		this._elements = {
			form: form,
			message: message

		};
	}

	_addHandlers () {
		this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
		this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));

		
	}

	_onAddMessage (event) {
		var message = 

	}


}

customElements.define('message-list', MessageList);
