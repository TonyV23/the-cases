import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
    const [toDos, setToDos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'go to the gym', key: '3' },
        { text: 'play on the switch', key: '4' },
        { text: 'workout', key: '5' }
    ]);

    const pressHandler = (key) => {
        setToDos((prevTodos) => {
            return prevTodos.filter((toDos) => toDos.key != key);
        });
    };

    return (
        <View style={styles.container}>
            <View>
                <Header />
                <View style={styles.content}>
                    {/* list */}
                    <View style={styles.list}>
                        <FlatList data={toDos} renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        padding: 40
    },
    list: {
        marginTop: 20
    }
});
