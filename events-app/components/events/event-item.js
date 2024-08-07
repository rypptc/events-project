import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const EventItem = ({ id, title, description }) => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('EventDetail', { eventId: id, title, description });
    };
  
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderRadius: 10,
    marginVertical: 5,
    padding: 30,
  },
});

export default EventItem;
