import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from "@nextui-org/react";

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
          <Text
            size={12}
            weight="bold"
            css={{ transform: "uppercase", color: "ffffffAA" }}
          >
            {label}
          </Text>
          <Text h4 color="white">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image src={imageUrl}></Card.Image>
      <Card.Footer
        isBlurred
        css={{ position: "absolute", bgBlur: "#0f11466", bottom: 0 }}
      >
        <Row>
          <Col>
            <Text color="#d1d1d1" size={18}>
              {studentCount} students
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat color="primary" auto rounded>
                <Text
                  css={{
                    color: "inherit",
                  }}
                  transform="uppercase"
                  size={12}
                  weight="bold"
                >
                  Enrol
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default InfoCard;
