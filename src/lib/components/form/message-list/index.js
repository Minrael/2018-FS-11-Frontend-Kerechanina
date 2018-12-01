//import styles from './index.css';
import shadowStyles from './shadow.css';

//const slotName = 'message-input';

const template = `
	<style>${shadowStyles.toString()}</style>
	<div id="container"></div>
	<div class="friend_message">Hi!</div>

`;

class MessageList extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}


	_initElements () {
		var mesForm = document.querySelector('message-form');
		var input = document.querySelector('message-list');
		var form = mesForm.shadowRoot.querySelector('form');
		var forminp = mesForm.shadowRoot.querySelector('form-input');
		var submitButton = forminp.shadowRoot.getElementById('submit');
		var attachButton = forminp.shadowRoot.getElementById('attach');

		this._elements = {
			form: form,
			mesForm: mesForm,
			input: input,
			submitButton: submitButton,
			attachButton: attachButton,
			forminp: forminp
		};	
	}

	_addHandlers () {

		this._elements.forminp.addEventListener('keypress', this._onKeyPress.bind(this), true);
		this._elements.submitButton.addEventListener('click', this._onSubmit.bind(this));
		this._elements.attachButton.addEventListener('change', this._loadFile.bind(this), false);
	}

	_onKeyPress(event) {
		if (event.keyCode == 13) {
			var div = document.createElement('div');
			if (this._elements.form.elements[0].value) {
				var text = this._elements.form.elements[0].value;
				div.innerHTML = text;
				div.className = 'message';
				this.shadowRoot.appendChild(div);
			}
		}
	}

	_onSubmit(event) {
		var div = document.createElement('div');
		var text = this._elements.form.elements[0].value;
		div.innerHTML = text;
		div.className = 'message';
		this.shadowRoot.appendChild(div);
	
	}

	_loadFile(event) {
		var file = evt.target.files[0];
		var reader = new FileReader();

		reader.onload = (function (theFile) {
			return function(e) {
				//var extension = f.name.split('.').pop().toLowerCase();

				var div = document.createElement('div');
				div.innerHTML = '<p>File: ' + f.name + ', size: ' + f.size + ' Byte.' + '</p>';
				div.className = 'message';
				this.shadowRoot.appendChild(div);
				}
			
		})(file);
		reader.readAsDataURL(file);

	}


}

customElements.define('message-list', MessageList);
