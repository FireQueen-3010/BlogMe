import React from "react";
import "./Blog.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Blog({ title, author, description, image, id }) {
  const liked = "like"+id;
  const [fav, setFav] = React.useState(JSON.parse(localStorage.getItem(liked)));
  
  React.useEffect(() => {
    localStorage.setItem(liked, JSON.stringify(fav));
  }, [fav]);

  const Like = () => {
    setFav(!fav);
  };
  const commented = "comment"+id;
  const [comment, setComment] = React.useState(
   JSON.parse(localStorage.getItem(commented))
  );

  React.useEffect(() => {
    localStorage.setItem(commented, JSON.stringify(comment));
    console.log(comment);
  }, [comment]);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
 
  const submitted = "submitted"+id;
  const [submit, setSubmit] = React.useState(
    JSON.parse(localStorage.getItem(submitted))
  );

  React.useEffect(() => {
    localStorage.setItem(submitted, JSON.stringify(submit));
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
            {!fav ? (
              <FavoriteBorderIcon className="blog-like--btn-1" />
            ) : (
              <FavoriteIcon className="blog-like--btn-1" />
            )}
          </a>
        </div>
        <div className="blog-comment">
          {/* {submit?<p>Comments:</p>:''} */}
          {!submit?
          <input
            className={`comment-box ${
              !submit ? "not-commented" : "commented"
            }`}
            placeholder="Leave a comment/review"
            onChange={(e) => onChangeHandler(e)}
          /> : <h2 className="commented">{comment}</h2>
          }
    
          {!submit || comment ==='' ? (
            <a className="submit-btn" accessKey="Enter" onClick={submitHandler}>
              <span>Submit</span>{" "}
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
