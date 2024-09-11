import { Text, View } from "react-native";

interface ProfileProps {
    name: string;
    age: number;
}

export function Profile(props: ProfileProps){

    const profileTextChoice = (age: number) => {
        if(age === 0)
            return "I am a newborn baby";
        else if(age < 0)
            return `I am ${age} years old?!?!???`;
        else
            return `I am ${age} ${age === 1 ? "year" : "years"} old`;
    }

    return (
        <View>
            <Text>Hi, My name is {props.name}</Text>
            <Text>{profileTextChoice(props.age)}</Text>
        </View>
    )
}

export default Profile;