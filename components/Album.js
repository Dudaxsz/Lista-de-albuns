import {View, Text, StyleSheet} from 'react-native'

export function Album({albumName, year, musics}) {
  return(
    <View style={styles.container}>
     <Text style={styles.albumName}>{albumName} {year}</Text>
     
     <Text style={styles.musics}>{musics}</Text>  
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 10,

  },

  albumName:{
    fontSize:14,
    fontWeight: 'bold',

  },
  


})








    

