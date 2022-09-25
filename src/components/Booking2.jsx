import React, { Component } from "react";
import { splashPhoto1 } from "../assets";
import ActionBarComponent from "./ActionBarComponent";

class Booking2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }

  render() {
    return (
      <div className="w-screen">
        <div
          className={`relative mx-auto mt-10 mb-10 max-w-screen-lg overflow-hidden text-center shadow-xl shadow-gray-300 `}
        >
          <img src={splashPhoto1} />
          <h1 className="mt-2 px-8 text-3xl font-bold font-poppins md:text-5xl">
            Book a Birthday Party at Giggles Playspace
          </h1>
          <p className="mt-6 text-lg font-poppins">
            1736 First St, Suite 102B, <br />
            Highland Park, IL 60035 <br />
            Phone: 555-555-5555 <br />
            Email: info@gigglesplay.com
          </p>
        </div>
        <div className="mx-auto grid max-w-screen-lg px-6 pb-20 font-poppins">
          <p className="mt-8 font-serif text-xl font-bold text-blue-900">
            Select which day you would like to reserve
          </p>
          <ActionBarComponent />
          <div className="">
            <p className="mt-8 font-serif text-xl font-bold text-blue-900">
              Select a time
            </p>
            <label className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
              <div className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                10:00 AM to 12:00 PM
              </div>
              <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
                1:00 PM - 3:00 PM
              </button>
              <button className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">
                4:00 PM - 6:00 PM
              </button>
            </label>
          </div>
          <form onSubmit={this.formSubmit}>
            <div className="radio">
              <input
                type="radio"
                value="10AM-12PM"
                checked={this.state.selectedOption === "10AM-12PM"}
                onChange={this.onValueChange}
              />
              <label>10AM - 12PM</label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="1PM-3PM"
                  checked={this.state.selectedOption === "1PM-3PM"}
                  onChange={this.onValueChange}
                />
                1PM-3PM
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="4PM-6PM"
                  checked={this.state.selectedOption === "4PM-6PM"}
                  onChange={this.onValueChange}
                />
                4PM-6PM
              </label>
            </div>
            <div>Selected option is : {this.state.selectedOption}</div>
            <button className="btn btn-default" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Booking2;
