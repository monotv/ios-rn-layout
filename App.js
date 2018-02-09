/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import Player from "./Player";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor() {
    super();
    const dim = Dimensions.get("window");
    this.state = {
      isPortrait: dim.height > dim.width,
      pageHeight: dim.height,
      pageWidth: dim.width
    };
  }
  getNewDimensions(event) {
    this.setState({
      pageHeight: event.nativeEvent.layout.height,
      pageWidth: event.nativeEvent.layout.width,
      isPortrait:
        event.nativeEvent.layout.height > event.nativeEvent.layout.width
    });
  }
  render() {
    return (
      <View
        style={styles.container}
        onLayout={this.getNewDimensions.bind(this)}
      >
        {this.state.isPortrait ? (
          <View>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <View style={{ width: this.state.pageWidth, height: 250 }}>
              <Player url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />
            </View>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>
        ) : (
          <View
            style={{
              width: this.state.pageWidth,
              height: this.state.pageHeight
            }}
          >
            <Player url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
