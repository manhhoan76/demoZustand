import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';
import useStore from '../store/useStore';

const SecondScreen = ({navigation}) => {
    const count = useStore(state => state.count);
    const addCount = useStore(state => state.addCount);
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ marginBottom: 20, fontSize: 25}}>Count: {count}</Text>
            <TouchableOpacity style={{backgroundColor: 'red', borderWidth: 1, borderRadius: 0.5, paddingVertical: 10, marginHorizontal: 30, marginVertical: 15}}
                              activeOpacity = {.9}
                              onPress={() => navigation.navigate('Home')}>
                <Text style={{ paddingHorizontal: 20}}>Back to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'pink', borderWidth: 1, borderRadius: 0.5, paddingVertical: 10, marginHorizontal: 30, marginVertical: 15}}
                              activeOpacity = {.9}
                              onPress={() => addCount}>
                <Text style={{ paddingHorizontal: 20}}>Add count</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SecondScreen;
