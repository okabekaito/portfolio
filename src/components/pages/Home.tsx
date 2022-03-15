import { CheckIcon } from "@chakra-ui/icons";
import { Box,Text, VisuallyHidden} from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
    return (
        <>
        <Box bg="#FEEBC8" borderRadius="10px" shadow="md" m={10} p={10}>
        <Text fontSize='6xl'textAlign="center">自己紹介</Text>
        <Text fontSize='lg'textAlign="center">岡部海斗です。現在大学4年生で経営学を学んでいます。</Text>
        <Text fontSize='lg'textAlign="center">現在はプログラミングを勉強するために大学を休学していて、来年卒業します。</Text>
        </Box>
        <Box bg="#F0FFF4" borderRadius="10px" shadow="md" m={10} p={10}>
        <Text  fontSize='6xl'textAlign="center">学んでいること</Text>
            <Text textAlign="center">HTML/CSS</Text>
            <Text textAlign="center">JavaScript</Text>
            <Text textAlign="center">TypeScript</Text>
            <Text textAlign="center">React</Text>
            <Text textAlign="center">Ruby(Ruby on Rails)</Text>
            <Text textAlign="center">php(Laravel)</Text>
            <Text textAlign="center">Java</Text>
            <Text textAlign="center">データーベース(SQL)</Text>
            <Text textAlign="center">ネットワーク</Text>
            <Text textAlign="center">web技術</Text>
            <Text textAlign="center">Linux</Text>
    </Box>
        </>
    )
})
