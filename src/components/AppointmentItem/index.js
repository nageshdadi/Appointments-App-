// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, selectedAppointment} = props

  const {id, title, date, isSelected} = eachAppointment

  const starUrl = isSelected
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickTheImg = () => {
    selectedAppointment(id)
  }

  return (
    <li className="listCart">
      <div className="titleAndStar">
        <p className="name">{title}</p>
        <button
          testid="star"
          className="btn"
          type="button"
          onClick={onClickTheImg}
        >
          <img src={starUrl} alt="star" className="starImg" />
        </button>
      </div>
      <p className="dateForamte">{date}</p>
    </li>
  )
}
export default AppointmentItem
