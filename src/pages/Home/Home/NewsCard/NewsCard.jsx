import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, details, title, image_url, author } = news;

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div>
          <p>{author?.name}</p>
          <p>
            <small>{author.published_date}</small>
          </p>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Show more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCard;
