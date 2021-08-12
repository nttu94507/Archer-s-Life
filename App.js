/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const flash =({total,num})=>{
    
    return total+num
}

const clear =({total})=>{
    
  return total=0
}

const Screen =({total})=>{
  return(
    <TouchableOpacity style={styles.screen} >
        <Text style={styles.total}>{total}</Text>
    </TouchableOpacity>
  )
}

const App = () => {
  const [total,ssetTotal] = React.useState(1);
  return (
    <View style={styles.BG}>
      <View style={styles.tittleBar}>
        <View style={[styles.tittle,styles.red]}></View>
        <View style={[styles.tittle,styles.orange]}></View>
        <View style={[styles.tittle,styles.green]}></View>
      </View>
      <Screen total={total}/>
      <View style={styles.keybroad}>
      {
        [7,8,9,4,5,6,1,2,3].map((N)=> (
          <TouchableOpacity style={styles.NumberButton} onPress={()=>{
            ssetTotal(flash({total:total,num:N}))
            console.log(total)
          }} >
            <Text>{N}</Text>
          </TouchableOpacity>
        ))}
      </View>
        {/* <View style={styles.container}>
          {
            [7,8,9].map((N)=> (
              <TouchableOpacity style={styles.NumberButton} onPress={()=>{
                ssetTotal(flash({total:total,num:N}))
                console.log(total)
              }} >
                <Text>{N}</Text>
              </TouchableOpacity>
            ))
          } 
        </View>
        <View style={styles.container}>
          {
            [4,5,6].map((N)=> (
              <TouchableOpacity style={styles.NumberButton} onPress={()=>{
                ssetTotal(flash({total:total,num:N}))
                console.log(total)
              }} >
                <Text>{N}</Text>
              </TouchableOpacity>
            ))
          } 
        </View>
        <View style={styles.container}>
          {
            [1,2,3].map((N)=> (
              <TouchableOpacity style={styles.NumberButton} onPress={()=>{
                ssetTotal(flash({total:total,num:N}))
                console.log(total)
              }} >
                <Text>{N}</Text>
              </TouchableOpacity>
            ))
          } 
        </View> */}

      <View>
        <Button title='clear' onPress={()=>{
          ssetTotal(clear({total:total}))
        }} />
      </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  BG:{
    flex:1,
    
  },
  keybroad:{
    flexDirection:'row',
    flexWrap:'wrap',
    // backgroundColor:'red',
    height:'65%',
  },
  tittleBar:{
    height:'5%',
    backgroundColor:'#5B5B5B',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:'row',
    paddingLeft:10,
  },
  screen:{
    height:'25%',
    width:'100%',
    backgroundColor:'#4F4F4F',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  container: {
    backgroundColor: '#BEBEBE',
    flex:1,
    width: '100%',
    height:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NumberButton: {
    backgroundColor: '#7B7B7B' ,
    flexDirection:'row',
    margin: 1,
    borderRadius:10,
    height:'35%',
    width:'32.8%',
    alignItems:'center',
    justifyContent:'center',
  },
  flex2:{
    flex:2,
  },
  orange:{
    backgroundColor:'orange'
  },
  deep:{
    backgroundColor:'#5B5B5B'
  },
  fontSize50:{
    color:'#E0E0E0',
    fontSize:50,
  },
  tittle:{
    width:15,
    height:15,
    borderRadius:50,
    margin:3,
    backgroundColor:'white',
  },
  red:{
    backgroundColor:'red'
  },
  green:{
    backgroundColor:'green'
  },
  total:{
    margin:10,
    fontSize:50,
    color:'white',
  },
});

export default App;
