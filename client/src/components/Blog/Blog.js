import React from "react";
import "./Blog.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Blog({ title, author, description, image }) {
  const [fav, setFav] = React.useState(localStorage.getItem("like") === false);
  React.useEffect(() => {
    localStorage.setItem("like", fav);
  }, [fav]);

  const Like = () => {
    setFav(!fav);
  };

  const [comment, setComment] = React.useState(
    localStorage.getItem("comment") === ""
  );

  React.useEffect(() => {
    localStorage.setItem("comment", comment);
  }, [comment]);

  const onChangeHandler = (e) => {
    setComment(e);
  };

  const [submit, setSubmit] = React.useState(
    localStorage.getItem("submitted") === false
  );

  React.useEffect(() => {
    localStorage.setItem("submitted", submit);
  }, [submit]);

  const submitHandler = () => {
    setSubmit(true);
  };

  return (
    <div className="blog">
      <div className="blog-img">
        <img className="blog-img--in" src={image}></img>
      </div>
      <div className="blog-cont--1">
        <h1>{title}</h1>
      </div>
      <div className="blog-cont--2">
        <h2>by {author}</h2>
      </div>
      <div className="blog-cont--3">
        <h4>{description}</h4>
      </div>
      <div className="blog-cont--4">
        <div className="blog-like">
          <a className="blog-like--btn" onClick={Like}>
            {fav === false ? (
              <FavoriteBorderIcon className="blog-like--btn-1" />
            ) : (
              <FavoriteIcon className="blog-like--btn-1" />
            )}
          </a>
        </div>
        <div className="blog-comment">
          {/* {submit?<p>Comments:</p>:''} */}
          <input
            className={`comment-box ${
              submit === false ? "not-commented" : "commented"
            }`}
            placeholder="Leave a comment/review"
            onChange={(e) => onChangeHandler(e)}
          />
          {submit === false || comment === "" ? (
            <a className="submit-btn" onClick={submitHandler}>
              <span>Submit</span>{" "}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
