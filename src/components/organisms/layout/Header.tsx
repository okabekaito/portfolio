import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen,onOpen,onClose }  = useDisclosure();
    return (
        <>
        <Flex as="nav" bg="teal.500"color="gray.50"align="center" justify="space-between"padding={{base:3,md:5}}>
            <Flex align="center" as="a" mr={8} _hover={{cursor:"pointer"}}>
                <Heading as="h1" fontSize={{base:"md",md:"lg"}}>portfolio</Heading>
            </Flex>
            <Flex align="center" fontSize="sm" flexGrow={2} display={{base:"none",md:"flex"}}>
                <Box pr={4}>
                    <Link to="/">ホーム</Link>
                </Box>
                <Link to="/deliverables">成果物</Link>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen}/>
        </>
    )
})
