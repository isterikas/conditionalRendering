const CitySelector = (props) => {
  if (props.city == "London") {
    return (
      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>Capital of United Kingdom.</p>
      </div>
    );
  } else if (props.city == "Paris") {
    return (
      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Capital of France.</p>
      </div>
    );
  } else if (props.city == "Tokyo") {
    return (
      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Capital of Japan.</p>
      </div>
    );
  }
};

export default CitySelector;
