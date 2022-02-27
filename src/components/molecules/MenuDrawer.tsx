import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome:() => void
    onClickDeliverables:() => void
}
export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose,isOpen,onClickHome,onClickDeliverables } = props
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%" onClick={onClickHome}>ホーム</Button>
                        <Button w="100%" onClick={onClickDeliverables}>成果物</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})
