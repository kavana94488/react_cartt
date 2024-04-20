import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Header = ({ type }) => {
  console.log(type);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination, setdestination] = useState("");
  const navigate = useNavigate();
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [showOption, setShowOption] = useState(false);

  const optionHandler = () => {
    setShowOption(!showOption);
  };

  const counterHandler = (name, type) => {
    setOption((item) => {
      return {
        ...item,
        [name]: type === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const searchHandler = () => {
    navigate("/hotel",{state:{destination,date,option}});
  };
  return (
    <div className="header">
      <div
        className={type === "list" ? "headerContainer list" : "headerContainer"}
      >
        <div className="headerList">
          <div className="headerItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {" "}
            <h1 className="headerTitle"> A lifetime discount</h1>
            <p className="headerDesc">
              Get rewarded for your travel ,unlock instant savings 0f 10% or
              more with a free booking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="where are you going"
                  className="headerSearchInput"
                  onChange={(e) => {
                    setdestination(e.target.value);
                  }}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpen(!open)}
                >
                  {format(date[0].startDate, "MM/dd/yyyy")} to{" "}
                  {format(date[0].endDate, "MM/dd/yyyy")}
                </span>
               
                  {open && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={optionHandler}
                >{` Adult ${option.adult} Children ${option.children}  Room ${option.room}`}</span>
                {showOption && (
                  <div className="option">
                    <div className="optionItem">
                      <span className="optionText" disabled={option.adult < 0}>
                        Adult
                      </span>
                      <div className="counter">
                        <button
                          className="counterButton"
                          onClick={() => {
                            counterHandler("adult", "d");
                          }}
                          disabled={option.adult <= 1}
                        >
                          -
                        </button>
                        <span className="value">{option.adult}</span>
                        <button
                          className="counterButton"
                          onClick={() => {
                            counterHandler("adult", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="counter">
                        <button
                          className="counterButton"
                          onClick={() => {
                            counterHandler("children", "d");
                          }}
                          disabled={option.children <= 0}
                        >
                          -
                        </button>
                        <span className="value">{option.children}</span>
                        <button
                          className="counterButton"
                          onClick={() => {
                            counterHandler("children", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="counter">
                        <button
                          className="counterButton"
                          onClick={() => {
                            counterHandler("room", "d");
                          }}
                          disabled={option.room <= 1}
                        >
                          -
                        </button>
                        <span className="value">{option.room}</span>
                        <button
                          className="counterButton"
                          onClick={() => {
                            counterHandler("room", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="headerbtnSearch" onClick={searchHandler}>
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
