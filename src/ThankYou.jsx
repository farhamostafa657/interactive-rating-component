function ThankYou({ index }) {
  return (
    <main className="container">
      <div className="img-box">
        <img
          src="./assets/images/illustration-thank-you.svg"
          alt="illustration-thank-you"
        />
      </div>

      <p className="customer-ratting"> You selected {index + 1} out of 5</p>

      <h2 className="thank">Thank You!</h2>

      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/farhamostafa657">
          Farha Mostafa
        </a>
        .
      </div>
    </main>
  );
}

export default ThankYou;
