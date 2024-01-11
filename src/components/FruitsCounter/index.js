import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state: {
    mango: 0,
    banana: 0,
  }

  mangoIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaIncrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
