import React from 'react';

export default class ProptimusOmega extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={'https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726'}
          className="App-logo"
          alt="logo"
          onClick={this.props.callForBetterHelp}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
