import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  change = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="bg2">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="in">Enter the phrase</label>
          <input
            placeholder="Enter the phrase"
            id="in"
            onChange={this.change}
          />

          <h1 className="hd2">No.of letters: {count}</h1>
          <div className="bg2">
            <img
              aly="watch-iamge"
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
