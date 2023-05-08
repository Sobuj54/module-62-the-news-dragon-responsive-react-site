import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div className="mt-4">
      <div>
        <h4>Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>

      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF></FaFacebookF>
            <>Facebook</>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>

      <QZone></QZone>
    </div>
  );
};

export default RightNav;
