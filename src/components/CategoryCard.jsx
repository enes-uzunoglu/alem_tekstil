import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CategoryCard(props) {
  const { category } = props;
  const { id, code, title, img, rating, gender } = category;

  return (
    <Link to={`/shop/${gender}/${title}`}>
      <Card>
        <CardHeader>
          <CardTitle>
            <h3>{title}</h3>
            <p>{rating}</p>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <img src={img} alt={code} id={id} />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
}
