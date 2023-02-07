import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

//Bulunduğun sınırlar içerisinde kaplayabildiğin kadar yer kapla demek flex çalışma mantığı budur
function App(){
  return( 
    <SafeAreaView style={styles.container}>
    <View style={styles.upper_view_container}>
      
      <Text>Selam Sana kırmızı renk</Text>
      </View>

      <View style={styles.bottom_view_container}>

        <Text>Selam sana Mavi Renk</Text>
      </View>
    </SafeAreaView>
    )

  }

  const styles = StyleSheet.create({
                                      
    container:{
    flex:1,//tepedekine bir değer vermezsek hiçbir şey gözükmez flex belirtmek zorundayız
    //ekrana belli bir yer kapla diyoruz aslında bunu yaparak yani hepsini mesela
    flexDirection:'column', //Yan Yana getirdi containerları
           
    },
    
    upper_view_container:{
    flex:1,    
    backgroundColor: 'red'
  },
  bottom_view_container:{

    flex:2,
    backgroundColor:'blue',
  }
});
  export default App;