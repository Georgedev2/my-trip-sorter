function computeActualCost(cost, discount) {
  let totalCost = discount === 0 ? cost : cost - (cost * discount) / 100;
  return totalCost;
}

function computeTime(hour, minute) {
  return Number(60 * hour + minute);
}

// SORT THE TRIP BASED ON THE SORTQUERY VALUE WHICH IS "sortBy"
export const sortTrip = (data, options, sortBy) => {
  //---------SORTING BY CHEAPEST-------------//
  if (sortBy === "fastest") {
    let filteredDeals = [];
    data.deals.forEach((deal) => {
      if (options.from === deal.departure && options.to === deal.arrival) {
        deal.duration = computeTime(deal.duration.h, deal.duration.m);
        filteredDeals.push(deal);
      }
    });

    //Sorting filteredDeals based on duration in ascending order
    filteredDeals.sort((a, b) => a.duration - b.duration);
    return filteredDeals;
  }

  //---------SORTING BY FASTEST-------------//
  if (sortBy === "cheapest") {
    let filteredDeals = [];
    data.deals.forEach((deal) => {
      if (options.from === deal.departure && options.to === deal.arrival) {
        deal.cost = computeActualCost(deal.cost, deal.discount);
        deal.duration = computeTime(deal.duration.h, deal.duration.m);
        filteredDeals.push(deal);
      }
    });

    //Sorting filteredDeals based on cost in ascending order
    filteredDeals.sort((a, b) => a.cost - b.cost);
    return filteredDeals;
  }
};

export const timeConverter = (num) => {
  let hours = Math.floor(num / 60) * 0.01;
  let minutes = num % 60;
  return hours + "hr" + " " + ":" + minutes + "min";
};
