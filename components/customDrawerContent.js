import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

function CustomDrawerContent(props) {
    function drawerPressHandler(option){
        props.drawerPressOption(option);
    }
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="PROFILE"
                onPress={()=>drawerPressHandler(0)}
            />
            <DrawerItem
                label="ATTENDANCE"
                onPress={()=>drawerPressHandler(1)}
            />
            <DrawerItem
                label="MARK VIEW"
                onPress={()=>drawerPressHandler(2)}
            />
            <DrawerItem
                label="LEAVE ENTRY"
                onPress={()=>drawerPressHandler(3)}
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;