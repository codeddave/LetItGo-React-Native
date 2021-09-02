import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListItem from "../components/ListItem"
import ListItemSeparator from "../components/ListItemSeparator"
import colors from "../config/colors";

import Icon from "../components/Icon"

const stuff = [
    {
        title: "My Listings",
        icon : {
            name: "format-list-bulleted", 
            backgroundColor: "red"
        }, 
        pageName: "Listings"
    }, 

    {
         title: "My Messages",
        icon : {
            name: "email", 
            backgroundColor: "grey"
        }, 
        pageName: "Messages"
    }
]

function AccountScreen({navigation}) {
  return (
      <View style={styles.screen}>
        <View style={styles.container}>
             <ListItem title="David Adeleye" subTitle="david@dave.com" image= {require("../assets/icon.png")}/>

         </View>
         <View style={styles.container}> 
            <FlatList
                data={stuff}
                keyExtractor={(item)=> item.title}
                ItemSeparatorComponent={()=> <ListItemSeparator/>}
                renderItem={({item}) => <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>} onPress={()=>navigation.navigate(item.pageName)}/>}
            />
         </View>
         <View style={styles.container}> 
           <ListItem title="Log Out" IconComponent={<Icon name ="logout" backgroundColor="#ffe66d"/>}/>
         </View> 
     </View>
  );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightGrey,
        flex: 1
    },
    container: {
        marginVertical: 20, 
        backgroundColor: "white"
    }
})
export default AccountScreen