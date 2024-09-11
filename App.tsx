import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Counter } from "./components/Counter";
import { useState } from 'react';
import Profile from './components/Profile';

import styles from './styles';

interface Person {
  name: string;
  age: number;
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

  const handlePassValue = () => {
    if(text !== '' && count > 0)
      setPerson({
        name: text,
        age: count
      });
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
        style={styles.text}
      />
    </View>
  );
}