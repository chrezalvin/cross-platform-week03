import { Button, Text, View } from "react-native";
import styles from "../styles";

interface CounterProps{
    handleIncrement: () => void;
    handleDecrement: () => void;
    handlePassValue: () => void;
    value: number;
}

export function Counter(props: CounterProps){
    return (
        <View style={{
            gap: 3
        }}>
            <Text style={styles.text}>{props.value}</Text>
            <Button title="Increment" onPress={props.handleIncrement} />
            <Button title="Decrement" onPress={props.handleDecrement} />
            <Button title="Pass value" onPress={props.handlePassValue} />
        </View>
    )
}

export default Counter;