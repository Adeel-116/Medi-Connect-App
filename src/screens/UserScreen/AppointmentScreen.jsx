import { Text, StyleSheet, View, FlatList } from 'react-native';
import React, { Component } from 'react';

export default class AppointmentScreen extends Component {
  state = {
    appointments: [
      {
        id: '1',
        doctor: 'Dr. Ayesha Khan',
        specialty: 'Cardiologist',
        date: '12 June 2025',
        time: '10:30 AM',
      },
      {
        id: '2',
        doctor: 'Dr. Usman Malik',
        specialty: 'Dermatologist',
        date: '18 June 2025',
        time: '2:00 PM',
      },
    ],
  };

  renderAppointment = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.doctorName}>{item.doctor}</Text>
      <Text style={styles.specialty}>{item.specialty}</Text>
      <Text style={styles.dateTime}>
        📅 {item.date} | ⏰ {item.time}
      </Text>
    </View>
  );

  render() {
    const { appointments } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>📅 Your Appointments</Text>
        {appointments.length > 0 ? (
          <FlatList
            data={appointments}
            renderItem={this.renderAppointment}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <Text style={styles.noAppointments}>No upcoming appointments.</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#e6f0ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
  },
  specialty: {
    fontSize: 14,
    color: '#555',
    marginVertical: 2,
  },
  dateTime: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  noAppointments: {
    marginTop: 30,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
