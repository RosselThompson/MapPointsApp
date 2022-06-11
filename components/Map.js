import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

const WIDTH_DEVICE = Dimensions.get("window").width;
const HEIGHT_DEVICE = Dimensions.get("window").height;

const Map = (props) => {
	const { onLongPress, points, isShowingPoints } = props;
	return (
		<MapView style={styles.map} onLongPress={onLongPress}>
			{isShowingPoints
				? points.map((e) => (
						<Marker key={e.name} coordinate={e.coordinate} title={e.name} />
				  ))
				: null}
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		width: WIDTH_DEVICE,
		height: HEIGHT_DEVICE - 150,
	},
});

export default Map;
