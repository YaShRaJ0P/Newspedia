import React from "react";

const Newscard = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, name } = props;
  return (
    <>
      <span
        className="badge text-bg-danger"
        style={{ position: "absolute", top: "-8px", right: "0px", zIndex: 1 }}
      >
        {name}
      </span>
      <div className="card">
        <img
          src={
            !imgUrl
              ? "https://img-cdn.thepublive.com/fit-in/1200x627/newsdrum-in/media/media_files/9fTKDMJjZDYUOX8y1y4F.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-primary">
            View
          </a>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Newscard;
