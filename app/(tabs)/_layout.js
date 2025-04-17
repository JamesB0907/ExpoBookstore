import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Storefront",
                    headerShown: false,
                    tabBarIcon: () => <MaterialIcons size={28} name="house" />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: () => <MaterialIcons size={28} name="person" />,
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
