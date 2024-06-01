import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TouchableOpacity, 
  FlatList, 
  RefreshControl, 
  ScrollView
} from 'react-native';
import data from './data';
import { useState } from 'react';
import Person from './components/Person';

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [people, setPeople] = useState(data)

  const onRefresh = () => {
    setIsRefreshing(true)
    setPeople(data)
    setIsRefreshing(false)
  }

  return (
    <ScrollView 
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.body}
    >
      <View style={styles.container}>
        <Text style={styles.containerTitle}>{people.length} Birthdays Today</Text>
        {
          people.map(item => <Person person={item} key={item.name} />)
        }
        <TouchableOpacity onPress={() => setPeople([])} style={styles.btn}>
          <Text style={styles.btnText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#f28ab2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: "#fff",
    width: "90%",
    elevation: 5,
    borderRadius: 5,
    paddingVertical: 24,
    paddingHorizontal: 32
  },
  containerTitle: {
    fontWeight: "normal",
    marginBottom: 12,
    fontSize: 20
  },
  btn: {
    width: "100%",
    backgroundColor: "#f28ab2",
    marginTop: 28,
    marginHorizontal: "auto",
    paddingVertical: 8,
    borderRadius: 4
  },
  btnText: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 18,
    textAlign: "center"
  }
});
