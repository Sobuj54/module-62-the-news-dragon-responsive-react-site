import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();
  const { category_id, details, title, image_url } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categories/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft> All News in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights></EditorsInsights>
    </div>
  );
};

export default News;
