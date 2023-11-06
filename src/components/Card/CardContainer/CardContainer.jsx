import React from "react";
import style from "./CardContainer.module.css";
import { useGetMessage } from "../../../data-access/useGetMessage";
import { CardImage } from "../CardImage/CardImage";
import { CardProfile } from "../CardProfile/CardProfile";
import { CardContent } from "../CardContent/CardContent";
import { CardDate } from "../CardDate/CardDate";
import { Card } from "../Card";

export const CardContainer = () => {
  const { data } = useGetMessage();

  return (
    <div>
      {data?.map((item) => {
        const { profileImageURL, sender, relationship, content, createdAt } =
          item;
        return (
          <Card>
            <div className={style.header}>
              <CardImage profileImageURL={profileImageURL} />
              <CardProfile sender={sender} relationship={relationship} />
            </div>
            <div className={style.divider}></div>
            <CardContent content={content} />
            <CardDate createdAt={createdAt} />
          </Card>
        );
      })}
    </div>
  );
};
