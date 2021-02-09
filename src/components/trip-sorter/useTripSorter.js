import { useState } from "react";

function useTripSorter() {
  //STATE DEFINITIONS
  const [sortBy, setSortBy] = useState("");
  const [options, setValue] = useState({
    to: "",
    from: "",
  });

  const handleChangeDeparture = (e) => {
    setValue({ ...options, to: e.target.value });
  };
  const handleChangeArrival = (e) => {
    setValue({ ...options, from: e.target.value });
  };

  return {
    handleChangeDeparture,
    handleChangeArrival,
    setSortBy,
    sortBy,
    options,
  };
}

export default useTripSorter;

