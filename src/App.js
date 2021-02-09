import "./App.css";
import TripSorter from "./components/trip-sorter/TripSorter";

function App() {
  return (
    <div className="App">
      <header className="App-header">TRIP SORTER</header>
      <main>
        <TripSorter />
      </main>
    </div>
  );
}

export default App;

/* // SORT THE TRIP BASED ON THE SORTQUERY VALUE WHICH IS "sortBy"
export const sortTrip = (data, from, to, sortBy) => {
  
  //---------SORTING BY CHEAPEST-------------//
  if (sortBy === "fastest") {
    let filteredDeals = [];
    data.deals.forEach((deal) => {
      if (from[0] === deal.departure && to[0] === deal.arrival) {
        deal.duration = Number(60 * deal.duration.h + deal.duration.m);
        filteredDeals.push(deal);
      }
    });

    //Sorting each deals based on duration
    filteredDeals.sort((a, b) => a.duration - b.duration);
    return filteredDeals;
  }

  //---------SORTING BY FASTEST-------------//
  if (sortBy === "cheapest") {
    let filteredDeals = [];
    data.deals.forEach((deal) => {
      if (from[0] === deal.departure && to[0] === deal.arrival) {
        deal.cost =
          (deal.cost * (deal.discount === 0 ? 1 : deal.discount)) / 100;
        deal.duration = Number(60 * deal.duration.h + deal.duration.m);
        filteredDeals.push(deal);
      }
    });

    //Sorting each deals based on cost in ascending order
    filteredDeals.sort((a, b) => a.cost - b.cost);
    return filteredDeals;
  }
}; */