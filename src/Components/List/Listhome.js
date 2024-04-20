import React, { useState } from 'react'
import './Listhome.css';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from './SearchItem';

const Listhome = ( { value }) => {
    console.log(value)

    const[destination,setDestination] = useState(value.state)
    const[date,setDate]=useState(value.state)
    const[option,setOption] = useState(value.state)
    const[showDate,setShowDate]=useState(false)

  return (
    <div className="list">
      <div className="listwrapper">
        <div className="search">
          <h1 className="Searchtitle">Search</h1>
          <div className="searchItem">
            <label>Destination</label>
            <input type="text" />
          </div>
          <div className="searchItem">
            <label>Check-in date</label>
            <span onClick={() => setShowDate(!showDate)}>
              {/* {format(date[0].startDate, "MM/dd/yyyy")} to{" "}
              {format(date[0].endDate, "MM/dd/yyyy")} */}
            </span>
            {showDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="searchResult">
            <p>options</p>

            <div className="searchResultItem">
              <label>Min price (per night)</label>
              <input type="text" />
            </div>
            <div className="searchResultItem">
              <label>Max price (per night)</label>
              <input type="text" />
            </div>
            <div className="searchResultItem">
              <label>Adult</label>
              <input type="number" min={1}  />
            </div>
            <div className="searchResultItem">
              <label>Children</label>
              <input type="number" min={0} />
            </div>
            <div className="searchResultItem">
              <label>Room</label>
              <input type="number" min={1}  />
            </div>
            <button className="searchButton">Search</button>
          </div>
        </div>
        <div className="listinfo">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
        </div>
      </div>
    </div>
  );
}

export default Listhome