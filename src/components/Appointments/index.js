// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', isSelected: false}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  selectedAppointment = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppoint => {
        if (id === eachAppoint.id) {
          return {...eachAppoint, isSelected: !eachAppoint.isSelected}
        }
        return eachAppoint
      }),
    }))
  }

  onClickSelected = () => {
    const {appointmentList} = this.state
    const selectedAppoint = appointmentList.filter(
      eachAppoint => eachAppoint.isSelected === true,
    )

    this.setState({appointmentList: selectedAppoint})
  }

  addAppointment = event => {
    event.preventDefault()
    const {date, title} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isSelected: false,
    }
    console.log(newAppointment)

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {appointmentList, title, date} = this.state
    return (
      <div className="bgContainer">
        <div className="Card">
          <div className="topCard">
            <form className="my-form-card" onSubmit={this.addAppointment}>
              <h1>Add Appointment</h1>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                onChange={this.onChangeTitle}
                value={title}
              />
              <br />
              <label htmlFor="date">DATE</label>
              <input
                id="date"
                type="date"
                onChange={this.onChangeDate}
                value={date}
              />
              <br />
              <button type="submit">Add</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="appointmentImg"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="bellowCard">
            <h3>Appointments</h3>
            <button
              type="button"
              className="button"
              onClick={this.onClickSelected}
            >
              Starred
            </button>
          </div>
          <ul className="ulAppointment">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                eachAppointment={eachAppointment}
                selectedAppointment={this.selectedAppointment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
