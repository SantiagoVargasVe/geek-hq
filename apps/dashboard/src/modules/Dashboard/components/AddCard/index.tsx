import React, { FC } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AddCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const AddCard: FC<AddCardProps> = ({ title, description, onClick }) => {
  return (
    <Card className="w-[150px] mt-5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={onClick}>Agregar</Button>
      </CardFooter>
    </Card>
  );
};

export default AddCard;
