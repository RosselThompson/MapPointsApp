import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Input = (props) => {
	const { title, ...rest } = props;
	return (
		<View style={styles.wrapper}>
			<Text>{title}</Text>
			<TextInput {...rest} />
		</View>
	);
};

const styles = StyleSheet.create({
    wrapper:{
        height: 40,
    }
});

export default Input;


