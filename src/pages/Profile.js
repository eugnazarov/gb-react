import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import { TOGGLE } from "../store/profile/types";
import { isChecked } from "../store/profile/selectors";

const Profile = () => {
  const checked = useSelector(isChecked);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Profile Page</p>
      <Checkbox
        value={checked}
        onChange={() => {
          dispatch({ type: TOGGLE });
        }}
      />
      <p>{checked.toString()}</p>
    </div>
  );
};

export default Profile;
