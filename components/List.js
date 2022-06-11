import {
	StyleSheet,
	FlatList,
	Text,
	View,
	Button,
	Dimensions,
} from "react-native";
const List = (props) => {
	const { data, onPressCloseButton } = props;
	return (
		<>
			<View style={styles.list}>
				<FlatList
					data={data.map((e) => e.name)}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Text>{item}</Text>
						</View>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
			<View style={styles.button}>
				<Button title='Close' onPress={onPressCloseButton} />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	list: {
		height: Dimensions.get("window").height - 250,
	},
	item: {
		borderBottomWidth: 1,
		borderColor: "#ccc",
		height: 50,
		justifyContent: "center",
		padding: 15,
	},
	button: {
		paddingBottom: 15,
	},
});

export default List;
