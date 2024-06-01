import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from '../../assets/data/exercises.json'

export default function App() {
  const exercise = exercises[1];
  return (
    <View style={styles.container}>
      <FlatList
      data={exercises}
      contentContainerStyle={{gap:10}}
      renderItem={({item})=>{
        return(
        <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name} </Text>
        <Text style={styles.exerciseSubtitle}>
          {item.muscle.toUpperCase()  } | {item .equipment.toUpperCase()} 
          </Text>
        </View>
  )}}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    padding:10,
    
  },
  exerciseContainer:{
    backgroundColor:'#fff',
    padding:10,
    borderRadius: 10,
    gap:7 ,
    marginHorizontal:2,
    shadowColor: "#000",
     shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  },
  exerciseName:{
    fontSize:20,
    fontWeight:500
  },
  exerciseSubtitle:{
    color:'dimgray'
  }
});
