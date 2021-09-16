import React from 'react'
import { Text, View } from '../components/Themed';
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native';

import chatRoomData from '../Data/Chats'
import ChatMessage from '../components/ChatMessage';

const ChatRoomScreen = () => {

    const route = useRoute(); // recieves chatRoom id

    return (
        
        <FlatList 
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message= {item} />}
            inverted
        />
    )
}

export default ChatRoomScreen;