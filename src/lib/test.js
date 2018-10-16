export default function sqv() {
  /* global window */
  window.onload = function () {
    /* global document */
    const div = document.createElement('div');
    div.className = 'alert alert-success';
    div.innerHTML = 'Hello Javascript!';
    document.body.appendChild(div);
  };
}
