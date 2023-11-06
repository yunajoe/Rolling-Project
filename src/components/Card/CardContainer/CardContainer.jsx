import React from "react";
import { useGetMessage } from "../../../data-access/useGetMessage";
import { CardBody } from "../CardBody/CardBody";
import { Card } from "../Card";
import { CardButtonImage } from "../CardImage/CardButtonImage";
import { useParams } from "react-router-dom";
export const CardContainer = () => {
  // const { id } = useParams();
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
