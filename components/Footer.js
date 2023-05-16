import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View style={styles.bottom}>
            <View>
                <Text style={styles.text}>
                    <Text style={styles.footerText1}>Made with</Text>
                    <FontAwesome5 name="heart" size={10} color="black" style={styles.footerText1}/>
                    <Text style={styles.footerText2}>in Bujumbura</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        paddingBottom: 0,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'thin'
    },
    footerText1: {
        marginRight: 10
    },
    footerText2: {
        marginLeft: 15
    }
});
