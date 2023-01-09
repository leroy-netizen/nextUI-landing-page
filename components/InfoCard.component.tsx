import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from "@nextui-org/react";
import { title } from "process";

interface Props {
  title: string;
  label: string;
  imageUrl: string;
  studentCount: string;
}

const InfoCard: NextPage<Props> = (props) => {
  // destructuring elements from the props object we are passing down
  const { title, label, imageUrl, studentCount } = props;
  return (
    <Card>
      <Card.Header css={{ position: "absolute", top: "5" }}>
        <Col>
                  <Text size={12} weight="bold" css={{ transform: "uppercase", color: "ffffffAA" }}>{label}</Text>
                  <Text h4 color="white">{ title}</Text>
        </Col>
          </Card.Header>
          <Card.Image src={imageUrl}></Card.Image>
    </Card>
  );
};
export default InfoCard;
