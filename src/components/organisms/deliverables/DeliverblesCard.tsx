import { Box, Button, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    image:string;
    title:string;
    content:string;
    TechnologyName:string;
    code:string;
    OnClickCard:() => void;
}
export const DeliverablesCard: VFC<Props> = memo((props) => {
    const {image,title,content,TechnologyName,code,OnClickCard} = props;
    return (
        <Box boxSize="440px" bg="white" borderRadius="10px" shadow="md" _hover={{cursor:"pointer",opacity:0.8}} onClick={OnClickCard}>
        <Stack align="center">
            <Image h="200px" src={image} alt="成果物の画像" m="auto" />
            <Text fontSize="lg" fontWeight="bold" textAlign="center">{title}</Text>
            <Text fontSize="sm" fontWeight="bold">{content}</Text>
                <HStack>
                    <Tag  variant='solid' colorScheme='facebook'>
                        {TechnologyName}
                    </Tag>
                </HStack>
            <Button colorScheme='cyan' variant='outline'>
                <a href={code}>コード</a>
            </Button>
        </Stack>
    </Box>
    )
})
