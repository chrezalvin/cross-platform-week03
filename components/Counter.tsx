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
            <View style={{
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 5,
            }}>
                <Button title="-" onPress={props.handleDecrement} />
                <Text style={[{
                    width: 50,
                    paddingHorizontal: 10,
                }, styles.text]}>{props.value}</Text>
                <Button title="+" onPress={props.handleIncrement}/>
            </View>
            <Button title="Pass value" onPress={props.handlePassValue} />
        </View>
    )
}

export default Counter;