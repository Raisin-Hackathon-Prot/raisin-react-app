'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  WebView
} = ReactNative;

var HTMLView = require('react-native-htmlview')

class CountryCell extends React.Component {
  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    console.log(this.props.country, this.props.country.flag, this.props.country.description)
    return (
      <View>
        <TouchableElement
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}>
          <View style={styles.row}>
            <View style={styles.textContainer}>
	            <Image
	              source={{uri: this.props.country.flag}}
	              style={styles.cellImage}
	            />
              <Text style={styles.movieTitle}>
                {this.props.country.name}
              </Text>
            </View>
          </View>
        </TouchableElement>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  movieTitle: {
    flex: 1,
    fontSize: 12,
    marginBottom: 2,
  },
	countryWiew: {
    flex: 1,
    fontSize: 12,
    marginBottom: 2,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  cellImage: {
    height: 32,
    marginRight: 10,
    width: 32,
  },
  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginLeft: 4,
  },
});

module.exports = CountryCell;
