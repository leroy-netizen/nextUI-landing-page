import type { NextPage } from "next";
import {Card, Text, Row, Col, Button} from "@nextui-org/react"
import { title } from "process";

interface Props{
    title: string,
    label: string,
    imageUrl: string,
    studentCount: string
}

const InfoCard: NextPage<Props> = (props) => {
    // destructuring elements from the props object we are passing down
    const {title, label, imageUrl, studentCount } = props
    return (
        
    );
}
export default InfoCard