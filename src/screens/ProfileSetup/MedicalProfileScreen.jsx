import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const colors = {
  primary: '#3470c3',
  secondary: '#578fca',
  tertiary: '#5c9ce4',
  background: '#FAF9F6',
  placeholder: '#888888',


  inputBackground: '#FFFFFF',
  buttonText: '#FFFFFF',
  border: '#E5E5E5',
  success: '#4CAF50',
  warning: '#FF9800',
  lightBlue: '#E3F2FD',
};

const MedicalProfileScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Form data state
  const [formData, setFormData] = useState({
    // Step 1
    gender: '',
    dateOfBirth: '',
    bloodGroup: '',
    address: '',
    
    // Step 2
    existingConditions: '',
    allergies: '',
    medications: '',
    pastSurgeries: '',
    familyMedicalHistory: '',
    
    // Step 3
    smoking: '',
    alcoholConsumption: '',
    activityLevel: '',
    location: '',
  });

  // Gender options
  const genderOptions = ['Male', 'Female', 'Other'];
  
  // Blood group options
  const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  // Activity level options
  const activityLevelOptions = ['Sedentary', 'Light', 'Moderate', 'Active', 'Very Active'];

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    Alert.alert(
      'Profile Updated',
      'Your medical profile has been successfully updated!',
      [{ text: 'OK', onPress: () => console.log('Profile submitted:', formData) }]
    );
  };

  // Custom Checkbox Component
  const CustomCheckbox = ({ options, selectedValue, onSelect, title }) => (
    <View style={styles.checkboxContainer}>
      <Text style={styles.checkboxTitle}>{title}</Text>
      <View style={styles.checkboxGrid}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.checkboxOption,
              selectedValue === option && styles.checkboxOptionSelected
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={[
              styles.checkboxText,
              selectedValue === option && styles.checkboxTextSelected
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  // Yes/No Checkbox Component
  const YesNoCheckbox = ({ title, selectedValue, onSelect }) => (
    <View style={styles.checkboxContainer}>
      <Text style={styles.checkboxTitle}>{title}</Text>
      <View style={styles.yesNoContainer}>
        {['Yes', 'No'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.yesNoOption,
              selectedValue === option && styles.checkboxOptionSelected
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={[
              styles.checkboxText,
              selectedValue === option && styles.checkboxTextSelected
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  // Step Indicator Component
  const StepIndicator = () => (
    <View style={styles.stepIndicator}>
      {[1, 2, 3].map((step) => (
        <View key={step} style={styles.stepContainer}>
          <View style={[
            styles.stepCircle,
            currentStep >= step && styles.stepCircleActive
          ]}>
            <Text style={[
              styles.stepText,
              currentStep >= step && styles.stepTextActive
            ]}>
              {step}
            </Text>
          </View>
          {step < totalSteps && (
            <View style={[
              styles.stepLine,
              currentStep > step && styles.stepLineActive
            ]} />
          )}
        </View>
      ))}
    </View>
  );

  // Render Step 1
  const renderStep1 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Personal Information</Text>
      
      <CustomCheckbox
        title="Gender"
        options={genderOptions}
        selectedValue={formData.gender}
        onSelect={(value) => updateFormData('gender', value)}
      />

      <CustomInput
        placeholder="Date of Birth (DD/MM/YYYY)"
        value={formData.dateOfBirth}
        onChangeText={(value) => updateFormData('dateOfBirth', value)}
      />

      <CustomCheckbox
        title="Blood Group"
        options={bloodGroupOptions}
        selectedValue={formData.bloodGroup}
        onSelect={(value) => updateFormData('bloodGroup', value)}
      />
    </View>
  );

  // Render Step 2
  const renderStep2 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Medical History</Text>
      
      <CustomInput
        placeholder="Existing Medical Conditions"
        value={formData.existingConditions}
        onChangeText={(value) => updateFormData('existingConditions', value)}
        inputStyle={styles.textArea}
      />

      <CustomInput
        placeholder="Allergies"
        value={formData.allergies}
        onChangeText={(value) => updateFormData('allergies', value)}
        inputStyle={styles.textArea}
      />

      <CustomInput
        placeholder="Current Medications"
        value={formData.medications}
        onChangeText={(value) => updateFormData('medications', value)}
        inputStyle={styles.textArea}
      />

      <CustomInput
        placeholder="Past Surgeries"
        value={formData.pastSurgeries}
        onChangeText={(value) => updateFormData('pastSurgeries', value)}
        inputStyle={styles.textArea}
      />

      <CustomInput
        placeholder="Family Medical History"
        value={formData.familyMedicalHistory}
        onChangeText={(value) => updateFormData('familyMedicalHistory', value)}
        inputStyle={styles.textArea}
      />
    </View>
  );

  // Render Step 3
  const renderStep3 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Lifestyle Information</Text>
      
      <YesNoCheckbox
        title="Do you smoke?"
        selectedValue={formData.smoking}
        onSelect={(value) => updateFormData('smoking', value)}
      />

      <YesNoCheckbox
        title="Do you consume alcohol?"
        selectedValue={formData.alcoholConsumption}
        onSelect={(value) => updateFormData('alcoholConsumption', value)}
      />

      <CustomCheckbox
        title="Activity Level"
        options={activityLevelOptions}
        selectedValue={formData.activityLevel}
        onSelect={(value) => updateFormData('activityLevel', value)}
      />

      <CustomInput
        placeholder="Location"
        value={formData.location}
        onChangeText={(value) => updateFormData('location', value)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Medical Profile</Text>
        <Text style={styles.headerSubtitle}>Complete your profile information</Text>
      </View>

      <StepIndicator />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </ScrollView>

      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <CustomButton
            title="Back"
            onPress={prevStep}
            containerStyle={[styles.button, styles.backButton]}
          />
        )}
        
        {currentStep < totalSteps ? (
          <CustomButton
            title="Next"
            onPress={nextStep}
            containerStyle={[styles.button, styles.nextButton]}
          />
        ) : (
          <CustomButton
            title="Submit"
            onPress={handleSubmit}
            containerStyle={[styles.button, styles.submitButton]}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.placeholder,
    textAlign: 'center',
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleActive: {
    backgroundColor: colors.primary,
  },
  stepText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.placeholder,
  },
  stepTextActive: {
    color: colors.buttonText,
  },
  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: colors.border,
    marginHorizontal: 5,
  },
  stepLineActive: {
    backgroundColor: colors.primary,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  stepContent: {
    paddingBottom: 20,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkboxTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 10,
  },
  checkboxGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  checkboxOption: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
    marginRight: 8,
    marginBottom: 8,
  },
  checkboxOptionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxText: {
    fontSize: 14,
    color: colors.placeholder,
    fontWeight: '500',
  },
  checkboxTextSelected: {
    color: colors.buttonText,
  },
  yesNoContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  yesNoOption: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
    alignItems: 'center',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 10,
  },
  button: {
    flex: 1,
    marginBottom: 0,
  },
  backButton: {
    backgroundColor: colors.secondary,
  },
  nextButton: {
    backgroundColor: colors.primary,
  },
  submitButton: {
    backgroundColor: colors.success,
  },
});

export default MedicalProfileScreen;