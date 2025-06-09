// screens/DoctorScreen.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import DoctorCard from '../../components/DoctorCard';

export class DoctorScreen extends Component {
  state = {
    doctors: [
      {
        id: '1',
        name: 'Dr. Ayesha Khan',
        specialty: 'Cardiologist',
        location: 'Lahore, PK',
        available: 'Mon-Fri',
      },
      {
        id: '2',
        name: 'Dr. Usman Raza',
        specialty: 'Dermatologist',
        location: 'Karachi, PK',
        available: 'Tue-Thu',
      },
      {
        id: '3',
        name: 'Dr. Sana Malik',
        specialty: 'General Physician',
        location: 'Islamabad, PK',
        available: 'Mon-Sat',
      },
    ],
  };

  handleDoctorSelect = (doctor) => {
    Alert.alert('Doctor Selected', `You selected ${doctor.name}`);
    // You could navigate to doctor detail screen here
  };

  render() {
    const { doctors } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>🔍 Find Doctors</Text>
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DoctorCard doctor={item} onPress={this.handleDoctorSelect} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f6f8',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default DoctorScreen;
