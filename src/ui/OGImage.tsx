import { Box, Container, Stack } from "@mui/material";
import { FC } from "react";
import { Description, Title } from "./styles";
import { Logo } from "./Logo";
import { ImageContainer } from "./ImageContainer";
import { transition } from "../lib/transition";
import { homePage } from "../lib/homePage";
import {QueryParams} from "../types";
import React from "react";

const CoverImage: FC<QueryParams> = ({ lang, title, desc }) => {
    const t = transition(homePage, lang || 'en');

    const defaultTitle = t.title;
    const defaultDescription = t.description;

    return (
        <Box height="100%" width="100%" p={6} position="relative">
            <ImageContainer />
            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                <Logo />
                <Stack height="100%" justifyContent="center" maxWidth={900}>
                    <Stack mt={3} gap={2} alignSelf="flex-start" mb={0}>
                        <Title variant="h1" color="white">
                            {title || defaultTitle}
                        </Title>
                        <Description variant="h2" color="white">
                            {desc || defaultDescription}
                        </Description>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export function OGImage(props: QueryParams) {
    return (
            <CoverImage {...props} />
    );
}
