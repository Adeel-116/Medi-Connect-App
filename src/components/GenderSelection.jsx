import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const GenderSelector = ({ selectedGender, onSelect }) => {
  const genders = ['Male', 'Female', 'Other'];
  
  return (
    <View style={styles.genderContainer}>
      <Text style={styles.genderLabel}>Gender</Text>
      <View style={styles.genderButtons}>
        {genders.map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[
              styles.genderButton,
              selectedGender === gender && styles.genderButtonSelected
            ]}
            onPress={() => onSelect(gender)}
          >
            <Text style={[
              styles.genderButtonText,
              selectedGender === gender && styles.genderButtonTextSelected
            ]}>
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

export default GenderSelector;