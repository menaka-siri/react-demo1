import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    console.log("toggle called");
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <AiFillHeart
        color="#ff6b81"
        size={20}
        onClick={() => {
          toggle(); //need to check why the function is not working without parenthis
          console.log("Red-heart-clicked!");
        }}
      />
    );
  return (
    <AiOutlineHeart
      size={20}
      onClick={() => {
        toggle();
        console.log("Empty-heart-clicked!");
      }}
    />
  );
};

export default Like;
