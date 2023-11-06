import React from "react";
import { Card } from "../Card";
import { CardImage } from "../CardImage/CardImage";
import { CardProfile } from "../CardProfile/CardProfile";
import { CardContent } from "../CardContent/CardContent";
import { CardDate } from "../CardDate/CardDate";
import style from "./CardBody.module.css";

export default function CardBody({ item }) {
  const { profileImageURL, sender, relationship, content, createdAt } = item;
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
}
