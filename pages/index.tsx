import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Container, Navbar, Text, Button } from "@nextui-org/react";

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
            <Button auto flat href="#">Sign Up </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      
      {/* Jumbotron */}
      {/* product cards */}
    </Container>
  );
}
    