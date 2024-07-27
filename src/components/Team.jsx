import React from "react";
import PropTypes from "prop-types";

export const Team = ({ data }) => {
  console.log("Team component data:", data);

  if (!data) {
    console.error("Data prop is undefined");
    return <div>Loading...</div>;
  }

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Brand Owner</h2>
          <p>
            Toluwase is the founder and creative force behind our fashion brand.
            With a passion for <br />
            design and a commitment to quality, I have built a reputation for{" "}
            <br />
            creating stylish and sophisticated clothing. My vision combines{" "}
            <br />
            innovative design with a focus on sustainability, ensuring each{" "}
            <br />
            piece is both fashionable and responsibly made. My dedication to{" "}
            <br />
            excellence drives the brand's success and keeps it at the forefront{" "}
            <br />
            of fashion trends.
          </p>
        </div>
        <div className="row">
          {data.length > 0
            ? data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6 team-item"
                >
                  <div className="team-thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="team-caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

Team.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};

Team.defaultProps = {
  data: [],
};
