import React, { Component } from 'react'
import { splashPhoto1 } from '../assets'
import CustomDay from './CustomDay'

class Booking2 extends Component {
  constructor () {
    super()
    this.state = {
      name: 'React'
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  onValueChange (event) {
    this.setState({
      selectedOption: event.target.value
    })
  }

  formSubmit (event) {
    event.preventDefault()
    console.log(this.state.selectedOption)
  }

  render () {
    return (
      <div className='w-screen'>
        <div
          className={`relative mx-auto mt-10 mb-10 max-w-screen-lg overflow-hidden text-center shadow-xl shadow-gray-300 `}
        >
          <img src={splashPhoto1} />
          <h1 className='mt-2 px-8 text-3xl font-bold font-poppins md:text-5xl'>
            Book a Birthday Party at Giggles Playspace
          </h1>
          <p className='mt-6 text-lg font-poppins'>
            1736 First St, Suite 102B, <br />
            Highland Park, IL 60035 <br />
            Phone: 555-555-5555 <br />
            Email: info@gigglesplay.com
          </p>
        </div>
        <div className='mx-auto grid max-w-screen-lg px-6 pb-20 font-poppins'>
          <h1>Select which day you would like to reserve</h1>
          <CustomDay />
          <form onSubmit={this.formSubmit}>
            <div className='radio'>
              <label>
                <input
                  type='radio'
                  value='Male'
                  checked={this.state.selectedOption === 'Male'}
                  onChange={this.onValueChange}
                />
                Male
              </label>
            </div>
            <div className='radio'>
              <label>
                <input
                  type='radio'
                  value='Female'
                  checked={this.state.selectedOption === 'Female'}
                  onChange={this.onValueChange}
                />
                Female
              </label>
            </div>
            <div className='radio'>
              <label>
                <input
                  type='radio'
                  value='Other'
                  checked={this.state.selectedOption === 'Other'}
                  onChange={this.onValueChange}
                />
                Other
              </label>
            </div>
            <div>Selected option is : {this.state.selectedOption}</div>
            <button className='btn btn-default' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Booking2
