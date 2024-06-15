class Button {
  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement('button');

    button.innerText = this.text;
    button.addEventListener('click', this.onClick);

    button.classList.add('btn');
    button.classList.add('btn-primary');

    return button;
  }
}

export default Button;
