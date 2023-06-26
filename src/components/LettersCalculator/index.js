import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, userText: ''}

  onChangeText = event => {
    this.setState({userText: event.target.value})
    this.setState(prevState => {
      console.log(`prevState count is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {userText, count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">
            Calculate the <br />
            Letters you <br />
            enter
          </h1>

          <label htmlFor="label" className="description">
            Enter the phrase
          </label>
          <br />

          <input
            type="text"
            placeholder="Enter the phrase"
            className="input-element"
            value={userText}
            onChange={this.onChangeText}
            id="label"
          />

          <div className="letters-counting-container">
            <p>No. of letters: {count}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
