// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0
  }

  
  getRandomNumber = () => Math.ceil(Math.random() * 100)
   

  onIncrement = () => {
    //console.log("count value")
    const randomNumber = this.getRandomNumber()
    // console.log(randomNumber)
    this.setState( (prevState) => {
      // console.log(`previous state value: ${prevState.count}`)
      return {
        count: prevState.count + randomNumber
      }
    })
  }
  render() {
    const {count} = this.state
    /* ---Using Ternary Operators ---*/
    const displaytext = count % 2 === 0 ? "Even" : "Odd"
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count-value">Count {count}</h1>
          <p className="number-category">Count is {displaytext}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
