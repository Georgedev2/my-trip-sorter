function Button({ setSortBy, label }) {
  return (
    <button
      className="sort-by"
      onClick={() => {
        setSortBy(label);
      }}
    >
      {label}
    </button>
  );
}

export default Button;
