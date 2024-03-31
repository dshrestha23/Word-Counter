import React from "react";

function About(props) {
  let styled = {
    color: props.mode === "dark" ? "white" : "#17191e",
  };

  return (
    <div className="container">
      <h2 className="my-3" style={styled}>
        About Word Counter
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={styled}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={styled}
            >
              What is Word Counter?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={styled}>
              <strong>Word Counter</strong> is a simple web application that
              allows you to count the number of words in a text. It's useful for
              checking the length of essays, blog posts, articles, and more.
              Additionally, it provides features to convert your text to
              uppercase or lowercase and preview the changes instantly.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={styled}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={styled}
            >
              How to use Word Counter?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={styled}>
              Simply paste or type your text into the input field and the word
              count will be displayed instantly. The counter also shows the
              number of characters in your text. You can convert your text to
              uppercase or lowercase using the respective buttons and preview
              the changes in the preview section.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
