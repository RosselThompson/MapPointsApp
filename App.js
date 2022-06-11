import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text } from "react-native";
import { Input, List, Map, Modal, Panel } from "./components";

const SHOW_MODAL_CONTENT_TYPE = {
	form: "FORM",
	list: "LIST",
};

export default function App() {
	const [isModalOpen, setisModalOpen] = useState(false);
	const [points, setpoints] = useState([]);
	const [tempPoint, settempPoint] = useState({});
	const [name, setname] = useState("");
	const [showModalContent, setshowModalContent] = useState(
		SHOW_MODAL_CONTENT_TYPE.form
	);
	const [isShowingPoints, setisShowingPoints] = useState(true);

	const mapHandleOnLongPress = ({ nativeEvent }) => {
		setshowModalContent(SHOW_MODAL_CONTENT_TYPE.form);
		settempPoint(nativeEvent?.coordinate);
		setisModalOpen(!isModalOpen);
	};
	const handleChangeName = (value) => setname(value);
	const handleSubmitModal = () => {
		setpoints((v) => [...v, { name, coordinate: tempPoint }]);
		setname("");
		setisModalOpen(!isModalOpen);
	};
	const handleOnPressLeftButton = () => {
		setshowModalContent(SHOW_MODAL_CONTENT_TYPE.list);
		setisModalOpen(!isModalOpen);
	};
	const handleOnPressRightButton = () => setisShowingPoints(!isShowingPoints);
	const handleOnPressCloseButton = () => setisModalOpen(!isModalOpen);

	return (
		<View style={styles.container}>
			<Map
				onLongPress={mapHandleOnLongPress}
				points={points}
				isShowingPoints={isShowingPoints}
			/>
			<Panel
				onPressLefttButton={handleOnPressLeftButton}
				onPressRightButton={handleOnPressRightButton}
				leftText='List'
				rightText='Show / Hide'
			/>
			<Modal isOpen={isModalOpen}>
				{showModalContent === SHOW_MODAL_CONTENT_TYPE.form ? (
					<View style={styles.form}>
						<Input
							title='Name'
							placeholder='Point name'
							onChangeText={handleChangeName}
						/>
						<Button title='Save' onPress={handleSubmitModal} />
					</View>
				) : (
					<List data={points} onPressCloseButton={handleOnPressCloseButton} />
				)}
			</Modal>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	form: {
		padding: 15,
	},
});
