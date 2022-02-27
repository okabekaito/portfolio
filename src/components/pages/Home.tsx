import { CheckIcon } from "@chakra-ui/icons";
import { Box,Text, VisuallyHidden} from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
    return (
        <>
        <Box bg="#FED7D7"h="250px"  borderRadius="10px" shadow="md" m={10} p={10}>
        <Text fontSize='6xl' textAlign="center">Home</Text>
        <Text fontSize='lg'textAlign="center">ここは作成物や学んできたことを紹介するサイトです。ReactとTypeScriptを使って作成しました。</Text>
        </Box>
        <Box bg="#FEEBC8" borderRadius="10px" shadow="md" m={10} p={10}>
        <Text fontSize='6xl'textAlign="center">自己紹介</Text>
        <Text fontSize='lg'textAlign="center">大学4年生経営学部の岡部海斗です。</Text>
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
            <Text textAlign="center">データーベース(SQL)</Text>
            <Text textAlign="center">ネットワーク</Text>
            <Text textAlign="center">web技術</Text>
            <Text textAlign="center">Linux</Text>
    </Box>
        </>
    )
})
