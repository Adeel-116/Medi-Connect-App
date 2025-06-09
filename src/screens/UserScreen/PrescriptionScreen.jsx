import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

export default class PrescriptionScreen extends Component {
  state = {
    prescriptions: [
      {
        id: '1',
        doctor: 'Dr. Ahmed Farooq',
        medications: ['Paracetamol 500mg', 'Vitamin D3'],
        date: '10 June 2025',
      },
      {
        id: '2',
        doctor: 'Dr. Sara Hashmi',
        medications: ['Amoxicillin 250mg', 'Ibuprofen'],
        date: '01 June 2025',
      },
    ],
  };

  renderPrescription = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.doctor}>👨‍⚕️ {item.doctor}</Text>
      <Text style={styles.date}>🗓️ Date: {item.date}</Text>
      <Text style={styles.medHeader}>💊 Medications:</Text>
      {item.medications.map((med, index) => (
        <Text style={styles.med} key={index}>• {med}</Text>
      ))}
    </View>
  );

  render() {
    const { prescriptions } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>📋 Your Prescriptions</Text>
        {prescriptions.length > 0 ? (
          <FlatList
            data={prescriptions}
            renderItem={this.renderPrescription}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <Text style={styles.noPrescriptions}>No prescriptions available.</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f5f9',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#e6f0ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  doctor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  medHeader: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
    color: '#007bff',
  },
  med: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  noPrescriptions: {
    marginTop: 30,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
