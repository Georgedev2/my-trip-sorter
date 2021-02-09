function DropDownList({ onHandleChange, locations, initialOption }) {
  return (
    <form>
      <select onChange={onHandleChange} className="to">
        <option>{initialOption}</option>
        {locations.map((location, i) => (
          <option value={location} key={i}>
            {location}
          </option>
        ))}
      </select>
    </form>
  );
}

export default DropDownList;
