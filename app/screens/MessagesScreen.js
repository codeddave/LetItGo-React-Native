import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import ListItem from "../components/ListItem"
import ListItemSeparator from "../components/ListItemSeparator"
import ListItemDeleteAction from '../components/ListItemDeleteAction'


const initialMessages = [{id: "1", title: "T1", description: "D1", image: require("../assets/chair.jpg")}, {id: "2", title: "T2", description: "D2", image: require("../assets/chair.jpg")}, {id: "3", title: "T3", description: "D3", image: require("../assets/chair.jpg")} ]
export default function MessagesScreen() {
 const [messages, setMessages]= useState(initialMessages)  
 const [refreshing, setRefreshing] = useState(false)
 const handleDelete = (id)=> {
     setMessages(messages.filter(message => message.id !== id))

 } 
    return (
    <SafeAreaView style={styles.container}>
      
            <FlatList
                data={messages}
                keyExctractor={message=> message.id.toString()}
                renderItem = {({item }) => <ListItem renderRightActions={()=> <ListItemDeleteAction onPress={()=> handleDelete(item.id)}/>} onPress ={()=> console.log("message selected", item)} title={item.id} subTitle={item.description} image={item.image} />}
                ItemSeparatorComponent ={() => <ListItemSeparator/>  }
                refreshing={refreshing}
                onRefresh={()=> setMessages(initialMessages)}
            />
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
