import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {handlePress} from './helpers/api';
import {styles} from './styles/App';
import * as Progress from 'react-native-progress';
export default function App() {
  const [input, setInput] = useState<string>('');
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onPress = () => {
    handlePress({input, setImage, setIsLoading});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.descriptionText}>Pls type your prompt</Text>
        <View style={styles.generateContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter the text"
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity
            disabled={isLoading}
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.buttonText}>Generate</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {isLoading ? (
          // <Text style={styles.descriptionText}>Generating...</Text>
          <Progress.Bar progress={0.3} width={200} />
        ) : image ? (
          <Image
            source={{uri: image.toString()}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}
