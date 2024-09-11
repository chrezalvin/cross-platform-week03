import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    },
    inputStyle: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 200,
      textAlign: 'center',
      borderRadius: 5,
    },
    text: {
      textAlign: 'center'
    },
    button: {
      minWidth: 20
    }
});

export default styles;