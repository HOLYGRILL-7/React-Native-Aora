import React from "react";
import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const index = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center">
                <Text className="px-2">index</Text>
            </View>
        </SafeAreaView>
    );
};

export default index;

// const styles = StyleSheet.create({});
