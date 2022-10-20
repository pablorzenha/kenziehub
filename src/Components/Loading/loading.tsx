import React from "react";
import { ContainerLoading, ImgLoading } from "./styles";
import loader from "../../Assets/Dual.svg";

function Loading() {
  return (
    <ContainerLoading>
      <ImgLoading src={loader} />
    </ContainerLoading>
  );
}

export default Loading;
