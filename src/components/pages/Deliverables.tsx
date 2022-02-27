import { Text, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { DeliverablesList } from "../../router/DeliberblesList";
import { DeliverablesCard } from "../organisms/deliverables/DeliverblesCard";

export const Deliverables: VFC = memo(() => {
    const { onOpen} = useDisclosure();

    const OnClickCard =() => onOpen();
    return (
    <>    
        <Text mt={10} textAlign="center" fontSize='6xl'>成果物紹介ページです</Text>
        <Text textAlign="center" fontSize='xl'>プログラミング言語以外の技術名のタグがある場合はgithubのREADMEからアプリサイトに繋がるリンクがあります</Text>
        <Wrap m={12} spacing="50px" p={{base:4,md:10}}>
            {DeliverablesList.map((route) => (
                <WrapItem >
                        <DeliverablesCard key={route.title} image={route.image} title={route.title} content={route.content} TechnologyName={route.TechnologyName}code={route.code} OnClickCard={OnClickCard} />
                </WrapItem>
            ))}            
        </Wrap>
    </>
    )
})
