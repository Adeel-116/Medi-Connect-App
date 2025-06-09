// components/DoctorCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DoctorCard = ({ doctor, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(doctor)}>
    <Text style={styles.name}>{doctor.name}</Text>
    <Text style={styles.specialty}>{doctor.specialty}</Text>
    <View style={styles.detailsRow}>
      <Icon name="location-on" size={16} color="#555" />
      <Text style={styles.location}>{doctor.location}</Text>
    </View>
    <View style={styles.detailsRow}>
      <Icon name="schedule" size={16} color="#555" />
      <Text style={styles.location}>Available: {doctor.available}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e6f0ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  specialty: {
    fontSize: 14,
    color: '#007bff',
    marginVertical: 5,
  },
  location: {
    fontSize: 13,
    marginLeft: 5,
    color: '#333',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
});

export default DoctorCard;
