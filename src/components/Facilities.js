import data from '../data'
import { useState } from 'react'
import Calendar from './Calendar'

function Facilities() {
  console.log(data)
  const [facility, setFacility] = useState([])

  const handleButton = (newFacility) => {
    setFacility(newFacility)
  }

  return (
    <div className="main-section">
      <div className="facilities">
        <button className="button" onClick={() => handleButton(data.bello)}>
          Bello Field
        </button>
        <button
          className="button"
          onClick={() => handleButton(data.squashCourts)}
        >
          Chase Gym
        </button>

        <button className="button" onClick={() => handleButton(data.carzoCage)}>
          Carzo Cage
        </button>

        <button
          className="button"
          onClick={() => handleButton(data.jacksonGym)}
        >
          Jackson Gym
        </button>
        <button
          className="button"
          onClick={() => handleButton(data.squashCourts)}
        >
          Squash Courts
        </button>
        {/* <button className="button" onClick={() => handleButton(data.zimman)}>
          Zimman Field
        </button> */}
        <button
          className="button"
          onClick={() => handleButton(data.gantcherCenter)}
        >
          Gantcher Center
        </button>
      </div>
      <Calendar facility={facility} />
    </div>
  )
}

export default Facilities
