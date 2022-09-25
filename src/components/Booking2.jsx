import { Button } from '@mui/material'
import React, { Component } from 'react'
import { splashPhoto1 } from '../assets'
import ActionBarComponent from './ActionBarComponent'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

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
    console.log(event)
    this.setState({
      selectedOption: event.target.value
    })
  }

  formSubmit (event) {
    event.preventDefault()
    console.log(this.state.ActionBarComponent)
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
          <form onSubmit={this.formSubmit}>
            <p className='mt-8 font-poppins text-xl font-bold text-blue-900'>
              Select which day you would like to reserve
            </p>
            <ActionBarComponent />

            <p className='font-poppins mt-8 text-xl font-bold text-blue-900'>
              Select a time
            </p>
            <div className='font-poppins mt-4 grid ss:grid-rows-3 md:grid-cols-3 gap-2 lg:max-w-xl'>
              <div>
                <input
                  type='radio'
                  id='10-12'
                  value='10AM-12PM'
                  className='hidden peer'
                  checked={this.state.selectedOption === '10AM-12PM'}
                  onChange={this.onValueChange}
                />
                <label
                  htmlFor='10-12'
                  className='inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                >
                  10:00 AM - 12:00 PM
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='1-3'
                  value='1PM-3PM'
                  className='hidden peer'
                  checked={this.state.selectedOption === '1PM-3PM'}
                  onChange={this.onValueChange}
                />
                <label
                  htmlFor='1-3'
                  className='inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                >
                  1:00 PM - 3:00 PM
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='4-6'
                  value='4PM-6PM'
                  className='hidden peer'
                  checked={this.state.selectedOption === '4PM-6PM'}
                  onChange={this.onValueChange}
                />
                <label
                  htmlFor='4-6'
                  className='inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                >
                  4:00 PM - 6:00 PM
                </label>
              </div>
            </div>
            <div className='mx-auto mt-6 max-w-md text-gray-600 grid place-items-center'>
              <Button variant='contained' onClick={this.formSubmit}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Booking2
