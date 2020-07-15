import React from 'react';
import './App.css';
import Proptimus from './Proptimus'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      dispatcher: null, 
      activeProp: null,
      catchPhrase: null, 
      morePower: null,
    }
  }

  
  callForBadHelp = (event) => {
    this.setState({
      dispatcher: 'Will this do, human?', 
      activeProp: 'Proptimus Omega',
      catchPhrase: 'I am the first drilled prop - Proptimus Omega',
      morePower: 'callForBetterHelp'
    })
  }
  
  callForBetterHelp = (event) => {
    this.setState({
      dispatcher: 'Are you sure this situation warrants this?', 
      activeProp: 'Proptimus Beta',
      catchPhrase: 'I am the middle drilled prop - Proptimus Beta',
      morePower: 'gimmeAllYouGot'
    })
  }

  gimmeAllYouGot = (event) => {
    this.setState({
      dispatcher: 'There are no bigger guns!', 
      activeProp: 'Proptimus Prime',
      catchPhrase: 'I am the last drilled prop - Proptimus Prime',
      morePower: 'sendThemHome'
    })
  }

  sendThemHome = (event) => {
    this.setState({
      dispatcher: null, 
      activeProp: null,
      catchPhrase: null, 
      morePower: null,
    })
  }

  render() {
    const {dispatcher, activeProp, catchPhrase, morePower} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick={event => this.callForBadHelp(event)}
          />
          {this.state && activeProp != null &&
          <>
            <p className="">{dispatcher}</p>
            <Proptimus
              catchPhrase={catchPhrase}
              morePower={this[morePower]}
              image={this.state.proptimusPhotos[activeProp]}
            />
          </>
          }

        </header>
      </div>
    );
  }
}
