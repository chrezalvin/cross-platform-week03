import { Text, View } from "react-native";

interface ProfileProps {
    name: string;
    age: number;
}

export function Profile(props: ProfileProps){

    const profileTextChoice = () => {
        if(props.age === 0)
            return "I am a newborn baby";
        else if(props.age < 0)
            return `I am ${props.age} years old?!?!???`;
        else
            return `I am ${props.age} ${props.age === 1 ? "year" : "years"} old`;
    }

    return (
        <View>
            <Text>Hi, My name is {props.name}</Text>
            <Text>{profileTextChoice()}</Text>
        </View>
    )
}

export default Profile;