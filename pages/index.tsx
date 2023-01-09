import { Inter } from "@next/font/google";
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import InfoCard from "../components/InfoCard.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      {/* NavBar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Learn NextJs + NextUI
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up{" "}
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      {/* Jumbotron */}

      <Grid.Container
        justify="center"
        css={{
          height: "500px",
          backgroundImage:
            "url(https://littlevisuals.co/images/headlights.jpg)",
        }}
      >
        <Grid xs={12} sm={6} css={{ textAlign: "center" }}>
          <Col css={{ width: "100%" }}>
            <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
              Your one stop shop
            </Text>
            <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
              for learning Next
            </Text>
            <Button
              size={"md"}
              color={"gradient"}
              css={{ width: "100%", marginTop: "1rem" }}
            >
              Give us a try
            </Button>
          </Col>
        </Grid>
      </Grid.Container>
      {/* product cards */}

      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Masterclass"
            title="learn Next Js and Next U from scratch to pro level"
            imageUrl="https://littlevisuals.co/images/vik.jpg"
            studentCount="200"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Components"
            title="learn Next Ui built in components"
            imageUrl="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="200"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Routing"
            title="learn Next Js Routing"
            imageUrl="https://littlevisuals.co/images/sunset.jpg"
            studentCount="200"
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
