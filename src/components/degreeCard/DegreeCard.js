import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h3 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h3>
                <h4 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h4>
              </div>
              <div className="body-header-duration">
                <h5 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h5>
              </div>
            </div>
            <div classname="body-content">
              {degree.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className="btn" style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
