import React from "react";
const PostSuper = MyControledComp => {
  const colors = [
    "red",
    "pink",
    "blue",
    "amber",
    "purple",
    "indigo",
    "cyan",
    "teal",
    "lime",
    "green"
  ];
  const randColor = colors[Math.floor(Math.random() * (colors.length - 1))];

  return props => (
    <div className={"card  darken-4 " + randColor}>
      <MyControledComp {...props} />
    </div>
  );
};
export default PostSuper;
