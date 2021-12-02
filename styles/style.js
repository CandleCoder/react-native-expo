import styled from 'styled-components/native';

export const ComponentContainer = styled.View`height: 100%;`;

export const ManageContainer = styled.View`
	height: 100px;
	position: relative;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const InputContainer = styled.View`
	flex-direction: row;
	border-radius: 10px;
`;

export const Input = styled.TextInput`
	border: 1px solid gray;
	font-size: 20px;
	background-color: white;
	width: 200px;
	margin-right: 20px;
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
	width: 80px;
	height: 50px;
	justify-content: center;
	align-items: center;
	background-color: whitesmoke;
	margin-bottom: 20px;
	border-radius: 10px;
`;

export const ChangeButton = styled.TouchableOpacity`
	width: 60px;
	height: 20px;
	background-color: whitesmoke;
	align-items: center;
	border-radius: 5px;
	margin-right: 5px;
`;

export const ContentContainer = styled.View`
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const EditContainer = styled.View`
	height: 50px;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
`;

export const InfoContainer = styled.View`
	width: 110px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	position: relative;
`;

export const List = styled.View`
	width: 90%;
	height: 60px;
	border: 1px solid whitesmoke;
	font-size: 17px;
	background-color: #ffffff;
	align-items: center;
	justify-content: space-between;
	padding-left: 10px;
	padding-right: 10px;
	flex-direction: row;
	margin-bottom: 20px;
	border-radius: 5px;
`;

export const ResponseStatusText = styled.Text`
	width: 90%;
	align-items: center;
	justify-content: space-between;
	margin-top: 60px;
	margin-left: 30px;
`;

export const HeadingText = styled.Text`
	text-align: center;
	font-weight: bold;
	font-style: italic;
	font-size: 25px;
	margin-top: 30px;
`;
