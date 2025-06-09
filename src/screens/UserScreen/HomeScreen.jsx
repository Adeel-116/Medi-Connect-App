import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export class HomeScreen extends Component {
  render() {
    const userName = 'Ali'; // You can fetch this dynamically later

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>👋 Hello, {userName}!</Text>
        <Text style={styles.subText}>Welcome to your health dashboard</Text>

        <View style={styles.section}>
          <Text style={styles.heading}>📅 Upcoming Appointments</Text>
          <Text style={styles.infoText}>You have no appointments scheduled yet.</Text>
        </View>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>🏥 Find a Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>💊 My Prescriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>📁 View Medical History</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.heading}>📰 Health Tips</Text>
          <Text style={styles.tip}>• Drink plenty of water</Text>
          <Text style={styles.tip}>• Exercise regularly</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    backgroundColor: '#f5f9ff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    marginTop: 25,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007bff',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  card: {
    backgroundColor: '#e0ecff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#004080',
    fontWeight: '500',
  },
  tip: {
    fontSize: 14,
    marginTop: 4,
    color: '#333',
  },
});

export default HomeScreen;
