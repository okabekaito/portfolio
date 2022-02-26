import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "@chakra-ui/icon";

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
            <IconButton aria-label="メニューボタン" icon={<HamburgerIcon />}size="sm" variant="unstyled" display={{base:"block",md:"none"}} onClick={onOpen} />
        </Flex>
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%">ホーム</Button>
                        <Button w="100%">成果物</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        </>
    )
})
