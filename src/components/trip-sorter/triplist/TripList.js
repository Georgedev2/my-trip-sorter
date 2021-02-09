import { timeConverter } from "../utilities";

function TripList({ sortedTrip }) {
  return (
    <div className="trips">
      {sortedTrip.map((route, i) => (
        <div className="trip" key={i}>
          <div className="trip-info">
            <div className="trip_destination">
              <span>{route.departure}</span>
              <span>&#x2192;</span>
              <span>{route.arrival}</span>
            </div>
            <div className="trip_further-info">
              <span>{route.transport}</span>
              <span>{route.reference}</span>
              for
              <span>{timeConverter(route.duration)}</span>
            </div>
          </div>
          <div className="trip_price">€{route.cost}</div>
        </div>
      ))}
    </div>
  );
}

export default TripList;
