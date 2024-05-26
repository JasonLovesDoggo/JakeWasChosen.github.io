import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import Particle from "../Particle";
import {Container} from "react-bootstrap";
import timelineData from "./data";
import TimelineCard, {Theme} from "./TimelineCard";
import {ThemeProvider} from "@mui/material";


export default function ProgrammingTimeline() {
    return (
        <ThemeProvider theme={Theme}>
            <Container className="timeline-container" style={{minHeight: "100vh"}} fluid>
                <Timeline position="alternate">
                    {timelineData.map((event) => (
                        TimelineCard(event.date, event.content, event.icon)
                    ))}
                </Timeline>
                <Particle/>
            </Container>
        </ThemeProvider>
    );
}
