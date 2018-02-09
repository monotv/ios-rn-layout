import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  requireNativeComponent,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  Alert,
  TouchableHighlight
} from "react-native";

class Player extends Component {
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
        style={{
          flex: 1,
          backgroundColor: "#000"
        }}
        onLayout={this.getNewDimensions.bind(this)}
      >
        <ActivityIndicator
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center"
          }}
        />
        <IRLPlayer
          url={this.props.url}
          style={{
            width: this.state.pageWidth,
            height: this.state.pageHeight
          }}
        />
        <TouchableHighlight
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "flex-end",
            justifyContent: "flex-end"
          }}
          onPress={() =>
            Alert.alert(
              "State",
              `Width: ${this.state.pageWidth} / Height: ${
                this.state.pageHeight
              }`
            )
          }
        >
          <Text style={{ color: "#fff" }}>Debug</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const IRLPlayerFace = {
  name: "IRLPlayer",
  propTypes: {
    url: PropTypes.string,
    ...View.propTypes
  }
};

const IRLPlayer = requireNativeComponent("IRLPlayer", IRLPlayerFace);

export default Player;
