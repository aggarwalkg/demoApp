import { Card } from "react-bootstrap";
import React from "react";
import ProfileImage from "../../images/profileImage.jpeg";
import { useDispatch, useSelector } from "react-redux";

import Button from "../button/Button";
import "./PeopleCard.css";
import { AuthAction, PostAction } from "../../redux/actions/Index";
const PeopleCard = (props) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.AuthReducer);

  console.log("props", userData.following);
  const handleSubmit = async () => {
    const type = userData?.following.includes(props.data._id);
    const params = {
      userId: userData._id,
      followingId: props.data._id,
      type: type ? "unfollow" : "follow",
    };
    const response = await dispatch(PostAction.followUnFollow(params));
    console.log("props", response);
    if (response) {
      console.log("props", "in jjj");

      dispatch(AuthAction.matchToken());
    }
  };
  return (
    <div className="cardPeople d-flex px-5 py-5">
      <div className="left">
        <img src={ProfileImage} />
      </div>

      <div className="rigth ml-5">
        <h1>Name:{props.data.firstName}</h1>
        <h3>Email:{props.data.email}</h3>
        <div className="d-flex mt-5 buttonDiv">
          <Button
            background="primary"
            color="tertiary"
            name={
              userData.following.includes(props.data._id)
                ? "Unfollow"
                : "Follow"
            }
            handleClick={handleSubmit}
            // loading={loading}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
