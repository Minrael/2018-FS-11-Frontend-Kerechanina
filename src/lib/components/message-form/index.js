//import styles from './index.css';
import shadowStyles from './shadow.css';


const slotName = 'message-input';

const template = `
	<style>

${shadowStyles.toString()}
		
	</style>
	<form>
		<form-input name="message_text" placeholder="Cообщение" slot="message-input">
		</form-input>
	</form>
`;



class MessageForm extends HTMLElement {
	constructor () {
		super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = template;
		this._initElements();
		this._addHandlers();
	}
}



customElements.define('message-form', MessageForm);
