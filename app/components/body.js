import {View, Text, ImageBackground, StyleSheet, Image} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";


const Body = () => {
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground source={Profiles.mtl.image} style={styles.image} imageStyle={styles.imageStyle}>
                    <Text style={styles.text1}>{Profiles.mtl.name}</Text>
                    <Text style={styles.text2}>{Profiles.mtl.caption}</Text>
                </ImageBackground>  
            </View>
            <View style={styles.player}>
                <Text style={styles.text3}>My hottest take</Text>
                <View style={styles.audioBox}>
                    <Image source={Icons.player.light} style={styles.playIcon}/>
                    <Image source={Icons.audioWave.light} style={styles.waveIcon}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        padding: "12%",
    },
    image: {
        width: "100%",
        aspectRatio: 1/1.1,
        height: undefined,
        borderRadius: 8,
        justifyContent: "space-between",
        shadowColor: Themes.light.shadows.shadowColor,
        hadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    imageStyle: {
        borderRadius: 8,
    },
    text1: {
        padding: 8,
        color: "white",
        fontFamily: "Sydney-Bold",
        fontSize: 32,
    },
    text2: {
        padding: 8,
        color: "white",
        fontFamily: "Sydney-Bold",
        fontSize: 18,
    },
    player: {
        marginTop: "5%",
        width: '100%',
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: Themes.light.bgSecondary,
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        justifyContent: "center",
        borderRadius: 40,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    text3: {
        fontFamily: 'Sydney',
        fontSize: 24,
    },
    audioBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    playIcon: {
        flex: 2,
        height: undefined,
        aspectRatio: 1,
        marginRight: 5, 
    },
    waveIcon: {
        flex: 8,
        resizeMode: 'contain',
    },
    
});

export default Body;