import { useEffect, useState } from "react";
import useTripSorter from "./useTripSorter";
import { data } from "./data";
import "./trip-sorter.css";
import { sortTrip } from "./utilities";
import DropDownList from "./drop-down-list/DropDownList";
import Button from "./button/Button";
import TripList from "./triplist/TripList";

function TripSorter() {
  //DESTRUCTURING OF THE CUSTOM useTripSorter HOOKS RETURN VALUE
  const {
    handleChangeDeparture,
    handleChangeArrival,
    setSortBy,
    sortBy,
    options,
  } = useTripSorter();

  //STATE DEFINITIONS
  let [sortedTrip, setSortedTrip] = useState([]);
  const [departures, setDepartures] = useState([]);
  const [arrivers, setArrivers] = useState([]);

  const getDeparture = () => {
    let departures = [];
    data.deals.forEach((deal) => {
      if (departures.indexOf(deal.departure) == -1) {
        departures.push(deal.departure);
      }
    });
    setDepartures(departures);
  };

  const getArrivers = () => {
    let arrivers = [];
    data.deals.forEach((deal) => {
      if (arrivers.indexOf(deal.arrival) == -1) {
        arrivers.push(deal.arrival);
      }
    });
    setArrivers(arrivers);
  };

  useEffect(() => {
    getArrivers();
    getDeparture();
  }, []);

  return (
    <div className="trip-sorter">
      <div>
        <div className="box">
          <DropDownList
            onHandleChange={handleChangeArrival}
            locations={arrivers}
            initialOption="From"
          />
        </div>

        <div className="box">
          <DropDownList
            onHandleChange={handleChangeDeparture}
            locations={departures}
            initialOption="To"
          />
        </div>
      </div>

      <div className="sort-btns">
        <Button label="cheapest" setSortBy={setSortBy} />
        <Button label="fastest" setSortBy={setSortBy} />
      </div>
      <div className="btn">
        <div
          onClick={() => {
            setSortedTrip(sortTrip(data, options, sortBy));
          }}
        >
          Search
        </div>
      </div>

      <div className="trips_container">
        <div
          className={`trip-title ${
            sortedTrip.length > 0 && "trip-title-display"
          }`}
        >
          <span>Sorted Trips</span>
        </div>
        <TripList sortedTrip={sortedTrip} />
        <div
          className={`reset-btn ${sortedTrip.length > 0 && "show-reset-btn"}`}
          onClick={() => {
            //RESET THE SORTEDTRIP TO AN EMPTY ARRAY
            setSortedTrip([]);
          }}
        >
          Reset
        </div>
      </div>
    </div>
  );
}

export default TripSorter;
