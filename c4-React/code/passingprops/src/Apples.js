function Apples(props) {
const pomaStyle={ background:"red",}

      return (
        <div className="promo-section">
            <div style={pomaStyle}>
                <h2>These apples are: {props.color}</h2>
            </div>
            <div>
                <h3>There are {props.number} apples.</h3>
            </div>
        </div>
      )
    }
    export default Apples;