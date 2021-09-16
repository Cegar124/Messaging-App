import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../ChatMessage/style';
import { Message } from "../types";

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {

    const { message } = props;

    const isMyMessage= () => {
        // check in database if id is mine to determine if it is my message
        return message.user.id == 'u1'
    }



    return (
        //.fromNow is used to display dates
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    // if statements to determine color and alignment of messages
                    backgroundColor: isMyMessage() ? '#147efb' : "#525252",
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
                ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text> }
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>  
            </View>
        </View>
    )
}

export default ChatMessage;