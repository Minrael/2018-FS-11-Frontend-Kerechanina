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


		var myHeaders = new Headers();

		var formData = new FormData();
		formData.append("message", text);

		var myInit = {
			method: 'POST',
			body: formData,
			mode: 'cors',
			cache: 'default'
		}

		fetch('http://localhost:8081', {mode: 'no-cors'}, myInit).then(function(response) {
			console.log('0');
			return response.blob();
		}).then(function(response) {
			var div = document.querySelector('message-list').shadowRoot.lastElementChild;
			div.innerHTML = text;		
		});	

	
	}







	_loadFile(evt) {
		var add = this.shadowRoot;
		var file = evt.target.files[0];
		var reader = new FileReader();

		reader.onload = (function (theFile) {
			return function(e) {

					var div = document.createElement('div');
					div.innerHTML = reader.result;
					div.className = 'message';
					add.appendChild(div);

			};
		})(file);
		reader.readAsDataURL(file);

}

/*	function loadImage (src) {
   		return new Promise((resolve, reject) => {
        		imgeElem = new Image();
        		imageElem.onload = event => resolve(imageElem);
        		imaeElem.onerror = reject;
        		imageElem.src = src;
    		}};
	
	}*/

}

customElements.define('message-list', MessageList);
