class Comments extends React.Component {
	constructor() {
		super();
		this.state = NameStore.getState();
		this.handleViewChange = (state) => {
			this.setState(state);
		}
	}

	componentDidMount() {
		NameActions.fetchNames();
	}

	componentWillMount() {
		NameStore.listen(this.handleViewChange);
	}

	componentWillUnmount() {
		NameStore.unlisten(this.handleViewChange);
	}

  render() {
	  return (
		  <div>
			  <Comment name={this.state.name} />
			</div>
		);
	}
}
