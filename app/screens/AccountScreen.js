import React from 'react';
import { View, Text } from 'react-native';
import ListItem from "../components/ListItem"


function AccountScreen() {
  return (
    <View>
        <ListItem title="david@dave.com" image= {require("../assets/icon.png")}/>
        
     </View>
  );
}
export default AccountScreen