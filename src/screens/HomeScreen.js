import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';
import useStore from '../store/useStore';

const HomeScreen = ({navigation}) => {
    let count = useStore(state => state.count);
    let addCount = useStore(state => state.addCount);

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ marginBottom: 20, fontSize: 25}}>Count: {count}</Text>
            <TouchableOpacity style={{backgroundColor: 'green', borderWidth: 1, borderRadius: 0.5, paddingVertical: 10, marginHorizontal: 30, marginVertical: 15}}
                              activeOpacity = {.9}
                              onPress={() => navigation.navigate('Second')}>
                <Text style={{paddingHorizontal: 20, fontSize: 17}}>Go to Second screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 1, borderRadius: 0.5, paddingVertical: 10, marginHorizontal: 30, marginVertical: 15}}
                              activeOpacity = {.9}
                              onPress={addCount}>
                <Text style={{paddingHorizontal: 20, fontSize: 17}}>Add Count</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default  HomeScreen;
