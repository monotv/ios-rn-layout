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
  render() {
    return (
      <View
        style={{
          flexGrow: 0,
          backgroundColor: "#000",
          width: this.props.width,
          height: this.props.height
        }}
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
          ref={component => this._player = component}
          url={this.props.url}
          width={this.props.width}
          height={this.props.height}
          style={{
            flex: 1
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
