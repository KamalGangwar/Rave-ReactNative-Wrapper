import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	loadingView: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		top: 0,
	},
	cancelButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		backgroundColor: '#f5a623',
		borderRadius: 4,
		padding: 10,
		paddingTop: 7,
		paddingBottom: 7,
	},
	cancelText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
});
