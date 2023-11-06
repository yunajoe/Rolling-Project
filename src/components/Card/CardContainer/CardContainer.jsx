import React from "react";
import { useGetMessage } from "../../../data-access/useGetMessage";
import CardBody from "./CardBody";
export const CardContainer = () => {
  const { data } = useGetMessage();
  return (
    <div>
      {data?.map((item, index) => {
        // index?
        return <CardBody key={index} item={item} />;
      })}
    </div>
  );
};
