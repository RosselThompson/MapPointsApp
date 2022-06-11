import { StyleSheet, View, Button } from "react-native";

const Panel = (props) => {
	const { onPressLefttButton, onPressRightButton, leftText, rightText } = props;
	return (
		<View style={styles.panel}>
			<Button title={leftText} onPress={onPressLefttButton} />
			<Button title={rightText} onPress={onPressRightButton} />
		</View>
	);
};
const styles = StyleSheet.create({
	panel: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Panel;
