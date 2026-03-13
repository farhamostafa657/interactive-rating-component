function Ratting({ index, dispatch }) {
  return (
    <>
      <main className="container">
        <div className="star-box">
          <img src="./assets/images/icon-star.svg" alt="icon-star" />
        </div>
        <div className="info-box">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering! 1 2 3 4 5
            Submit
          </p>
        </div>
        <div className="stars-box">
          {Array.from({ length: 5 }, (_, i) => (
            <button
              // style={{
              //   backgroundColor: `${index === i ? "white" : ""}`,
              //   color: `${index === i ? "black" : ""}`,
              // }}
              className={index === i ? "selected" : ""}
              key={i}
              onClick={() => dispatch({ type: "rating", payload: i })}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="submit-box">
          <button onClick={() => dispatch({ type: "submet" })}>SUBMIT</button>
        </div>
      </main>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Farha Mostafa</a>.
      </div>
    </>
  );
}

export default Ratting;
