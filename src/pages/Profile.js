import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import { TOGGLE } from "../store/profile/types";

const Profile = () => {
  const { isChecked } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Profile Page</p>
      <Checkbox
        value={isChecked}
        onChange={() => {
          dispatch({ type: TOGGLE });
        }}
      />
      <p>{isChecked.toString()}</p>
    </div>
  );
};

export default Profile;
