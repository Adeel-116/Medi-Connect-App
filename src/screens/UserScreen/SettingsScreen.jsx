import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class SettingsScreen extends Component {
  handlePress = (settingName) => {
    Alert.alert(`${settingName}`, `You tapped on ${settingName}`);
  };

  renderSettingItem = (icon, label) => (
    <TouchableOpacity style={styles.item} onPress={() => this.handlePress(label)} key={label}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color="#007bff" />
      </View>
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );

  render() {
    const settingsOptions = [
      { icon: 'person', label: 'Profile' },
      { icon: 'notifications', label: 'Notifications' },
      { icon: 'lock', label: 'Privacy & Security' },
      { icon: 'help-outline', label: 'Help & Support' },
      { icon: 'logout', label: 'Logout' },
    ];

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>⚙️ Settings</Text>
        {settingsOptions.map((item) =>
          this.renderSettingItem(item.icon, item.label)
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f6f8',
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaf2ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  iconContainer: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SettingsScreen;
