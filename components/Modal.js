import { View, StyleSheet, Modal as RNModal, Dimensions } from "react-native";

const Modal = (props) => {
	const { isOpen, children } = props;
	return (
		<RNModal transparent animationType='slide' visible={isOpen}>
			<View style={styles.center}>
				<View style={styles.modalView}>{children}</View>
			</View>
		</RNModal>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.3)",
	},
	modalView: {
		minWidth: Dimensions.get("window").width - 100,
		backgroundColor: "#fff",
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
	},
});

export default Modal;
