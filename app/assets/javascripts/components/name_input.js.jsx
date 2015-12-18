class NameInput extends React.Component {
	constructor() {
		super();
		this.handleChange = () => {
			var nameInput = this.refs.nameInput.value.trim();
     	this.props.onChange(nameInput);
    }
  }

  render() {
    return (
      <input
       ref="nameInput"
       onChange={this.handleChange}
       type="text"
       value={this.props.name} />
    );
  }
}
