import React from "react";
import { CustomButtomContainer } from "./CustomButtonStyle";

const CustomButton = ({ children, ...props }) => (
  <CustomButtomContainer {...props}>{children}</CustomButtomContainer>
);

export default CustomButton;
