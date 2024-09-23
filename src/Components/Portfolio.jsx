  /**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio_back.jpg";

const imageAltText = "matrix binary code";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Plant classification model using CNN",
    description:
      "A Convolutional Neural Network model that classifies plants based on their images of leaves. It is trained on a dataset of 100,000 images of 13 different kitchen plants that can help farmers grow their crops.",
    url: "",
  },
  {
    title: "Simple Regression model using Scikit-Learn",
    description:
      "My first machine learning model that uses sklearn library with Random Forest Regressor algorithm.",
    url: "https://github.com/Chitransh-coder/Regression-Model-using-SKLearn",
  },
  {
    title: "Student Database Management system by C",
    description:
      "Created a student databasse management system in C using sqlite3.",
    url: "https://github.com/Chitransh-coder/Student-Database-by-C--",
  },
  {
    title: "Simple REST API using Flask",
    description:
      "Simple RESTful API that helps managing a store using Flask Library in Python.",
    url: "https://github.com/Chitransh-coder/Simple-REST-API-using-Flask",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
