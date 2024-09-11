import { Text, View } from "react-native";

interface ProfileProps {
    name: string;
    age: number;
}

export function Profile(props: ProfileProps){
    return (
        <View>
            <Text>Hi, My name is {props.name}</Text>
            <Text>I am {props.age} {props.age == 1 ? "year" : "years"} old</Text>
        </View>
    )
}

export default Profile;