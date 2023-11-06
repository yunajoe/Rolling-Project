import React from "react";
import { useGetMessage } from "../../../data-access/useGetMessage";
import { CardBody } from "../CardBody/CardBody";
import { Card } from "../Card";
import { CardButtonImage } from "../CardImage/CardButtonImage";
export const CardContainer = () => {
  const { data } = useGetMessage();
  return (
    <div>
      {data?.map((item) => {
        return <CardBody key={item.id} item={item} />;
      })}
      <Card>
        <CardButtonImage />
      </Card>
    </div>
  );
};
