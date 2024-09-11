import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Counter } from "./components/Counter";
import { useState } from 'react';
import Profile from './components/Profile';

import styles from './styles';

interface Person {
  name: string;
  age: number;
}

function capitalize(str: string){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [person, setPerson] = useState<Person | null>(null);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const resetState = () => {
    setCount(0);
    setText('');
  }

  const handlePassValue = () => {
    if(text !== ''){
      setPerson({
        name: capitalize(text),
        age: count
      });

      resetState();
    }
  }

  return (
    <View style={styles.container}>
      {
        person && (
          <Profile 
            name={person.name}
            age={person.age}
            />
        )
      }
      <Counter 
        value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handlePassValue={handlePassValue}
      />
      <TextInput 
        value={text}
        onChangeText={setText}
        placeholder="Enter your name"
        style={[
          styles.inputStyle,
          styles.text
        ]}
      />
    </View>
  );
}