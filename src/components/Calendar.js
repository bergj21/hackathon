const Calendar = (props) => {
  const facility = props.facility

  const times = [
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
  ]

  function calcSpan(event) {
    // Parse the input strings and separate by hours and minutes
    let start_hour = event.start_time.substring(0, 2)
    let end_hour = event.end_time.substring(0, 2)
    const start_min = event.start_time.substring(3, 5)
    const end_min = event.end_time.substring(3, 5)

    // Remove leading zeros from the hours
    if (start_hour[0] === '0') {
      start_hour = String(start_hour[1])
    }
    if (end_hour[0] === '0') {
      end_hour = String(end_hour[1])
    }

    // Parsing the hours in strings into integers & calculating difference
    const start_hour_int = parseInt(start_hour)
    const end_hour_int = parseInt(end_hour)
    const hour_diff = end_hour_int - start_hour_int

    // Parsing the minutes in strings into integers & calculting difference
    const start_min_int = parseInt(start_min)
    const end_min_int = parseInt(end_min)
    const min_diff = end_min_int - start_min_int

    // Calculating the total time difference
    const total_diff = hour_diff * 60 + min_diff

    // Determining the number of half hour intervals within the two given times
    const interval = total_diff / 30

    return interval
  }

  return (
    <nav className="calender">
      <table>
        <tbody>
          <tr>
            <td style={{ fontSize: '1rem' }}>Time</td>
            <td style={{ fontSize: '1rem' }}>Events</td>
          </tr>
          {times.map((time) => (
            <tr>
              <th>{time}</th>
              {facility.map(
                (event) =>
                  time === event.start_time && (
                    <td rowSpan={calcSpan(event)} className="event">
                      <span>{event.reason}</span>
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </nav>
  )
}
export default Calendar
