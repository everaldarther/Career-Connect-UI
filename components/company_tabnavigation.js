import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Image } from 'react-native';

const CompanyTabsNavigation = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.tab}>
                <Image source={require('../assets/Icons/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Image source={require('../assets/Icons/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Image source={require('../assets/Icons/profile.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 40,
    },
    tab: {
        alignItems: 'center',
    },
});

export default CompanyTabsNavigation;