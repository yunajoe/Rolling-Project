import React from "react";
import { Card } from "../Card";
import { CardProfileImage } from "../CardImage/CardProfileImage";
import { CardProfile } from "../CardProfile/CardProfile";
import { CardContent } from "../CardContent/CardContent";
import { CardDate } from "../CardDate/CardDate";
import style from "./CardBody.module.css";

export const CardBody = ({ item }) => {
  const { profileImageURL, sender, relationship, content, createdAt } = item;
  return (
    <Card>
      <div className={style.header}>
        <CardProfileImage profileImageURL={profileImageURL} />
        <CardProfile sender={sender} relationship={relationship} />
      </div>
      <div className={style.divider}></div>
      <CardContent content={content} />
      <CardDate createdAt={createdAt} />
    </Card>
  );
};
