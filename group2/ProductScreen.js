'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  ActivityIndicator,
  ListView,
  Platform,
  StyleSheet,
  Text,
  View,
} = ReactNative;
var TimerMixin = require('react-timer-mixin');

//var invariant = require('fbjs/lib/invariant');
//var dismissKeyboard = require('dismissKeyboard');

var CountryCell = require('./CountryCell');
//var MovieScreen = require('./MovieScreen');
var SearchBar = require('SearchBar');

var API_URL = 'https://www.weltsparen.de/wp-json/sg-core/1.0/term-deposits/';

var resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  totalForQuery: {},
};

var LOADING = {};

var ProductScreen = React.createClass({
  mixins: [TimerMixin],

  timeoutID: (null: any),


  render: function() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        productScreen
      </View>
    );
  },
});

module.exports = ProductScreen;
