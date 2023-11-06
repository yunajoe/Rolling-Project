import React from "react";
import { useGetMessage } from "../../../data-access/useGetMessage";
import CardBody from "./CardBody";
export const CardContainer = () => {
  const { data } = useGetMessage();
  console.log(data);
  return (
    <div>
      {data?.map((item) => {
        // index?

        return <CardBody key={item.id} item={item} />;
      })}
    </div>
  );
};
