import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
  Alert,
  Modal,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

const colors = {
  primary: '#3670c4',
  secondary: '#FF6F61',
  background: '#F9F9F9',
  text: '#1C1C1E',
  placeholder: '#A0A0A0',
  inputBackground: '#FFFFFF',
  buttonText: '#FFFFFF',
  border: '#E5E5E5',
  success: '#4CAF50',
  warning: '#FF9800',
  lightBlue: '#E3F2FD',
  lightGreen: '#E8F5E8',
  lightOrange: '#FFF3E0',
  lightRed: '#FFEBEE',
  danger: '#FF4444',
};

const darkColors = {
  primary: '#4A90E2',
  secondary: '#FF6F61',
  background: '#121212',
  text: '#FFFFFF',
  placeholder: '#888888',
  inputBackground: '#1E1E1E',
  buttonText: '#FFFFFF',
  border: '#333333',
  success: '#4CAF50',
  warning: '#FF9800',
  lightBlue: '#1A237E',
  lightGreen: '#2E7D32',
  lightOrange: '#FF8F00',
  lightRed: '#C62828',
  danger: '#FF4444',
};

export class SettingsScreen extends Component {
  state = {
    isDarkMode: false,
    notifications: true,
    locationServices: true,
    biometricAuth: false,
    autoBackup: true,
    showEditModal: false,
    showImagePicker: false,
    userProfile: {
      name: 'Ali Rahman',
      email: 'ali.rahman@email.com',
      phone: '+92 300 1234567',
      dateOfBirth: '1990-05-15',
      gender: 'Male',
      bloodGroup: 'B+',
      address: 'Block 5, Gulshan-e-Iqbal, Karachi',
      emergencyContact: '+92 321 9876543',
      profileImage: null,
    },
    editingField: null,
    editValue: '',
  };

  getCurrentColors = () => {
    return this.state.isDarkMode ? darkColors : colors;
  };

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
    StatusBar.setBarStyle(
      !this.state.isDarkMode ? 'light-content' : 'dark-content',
      true
    );
  };

  handleEditField = (field, value) => {
    this.setState({
      editingField: field,
      editValue: value,
      showEditModal: true,
    });
  };

  saveFieldEdit = () => {
    if (this.state.editingField && this.state.editValue.trim()) {
      this.setState({
        userProfile: {
          ...this.state.userProfile,
          [this.state.editingField]: this.state.editValue.trim(),
        },
        showEditModal: false,
        editingField: null,
        editValue: '',
      });
    }
  };

  handleImagePicker = () => {
    this.setState({ showImagePicker: true });
  };

  selectImageOption = (option) => {
    this.setState({ showImagePicker: false });
    
    // In a real app, you would implement actual image picking logic here
    if (option === 'camera' || option === 'gallery') {
      // Simulate image selection
      this.setState({
        userProfile: {
          ...this.state.userProfile,
          profileImage: 'https://via.placeholder.com/100x100.png?text=User',
        },
      });
    } else if (option === 'remove') {
      this.setState({
        userProfile: {
          ...this.state.userProfile,
          profileImage: null,
        },
      });
    }
  };

  handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // Handle logout logic here
            console.log('User logged out');
          },
        },
      ]
    );
  };

  handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'This action cannot be undone. Are you absolutely sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            // Handle account deletion logic here
            console.log('Account deletion requested');
          },
        },
      ]
    );
  };

  renderProfileSection = () => {
    const currentColors = this.getCurrentColors();
    const { userProfile } = this.state;

    return (
      <View style={[styles.profileSection, { backgroundColor: currentColors.inputBackground }]}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            {userProfile.profileImage ? (
              <Image source={{ uri: userProfile.profileImage }} style={styles.profileImage} />
            ) : (
              <View style={[styles.profileImagePlaceholder, { backgroundColor: currentColors.lightBlue }]}>
                <Icon name="person" size={40} color={currentColors.primary} />
              </View>
            )}
            <TouchableOpacity
              style={[styles.editImageButton, { backgroundColor: currentColors.primary }]}
              onPress={this.handleImagePicker}
            >
              <Icon name="camera-alt" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: currentColors.text }]}>
              {userProfile.name}
            </Text>
            <Text style={[styles.profileEmail, { color: currentColors.placeholder }]}>
              {userProfile.email}
            </Text>
            <View style={styles.verificationBadge}>
              <Icon name="verified" size={16} color={currentColors.success} />
              <Text style={[styles.verifiedText, { color: currentColors.success }]}>Verified</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderSettingItem = (icon, title, subtitle, onPress, rightComponent) => {
    const currentColors = this.getCurrentColors();
    
    return (
      <TouchableOpacity
        style={[styles.settingItem, { backgroundColor: currentColors.inputBackground }]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.settingLeft}>
          <View style={[styles.settingIcon, { backgroundColor: currentColors.lightBlue }]}>
            {icon}
          </View>
          <View style={styles.settingContent}>
            <Text style={[styles.settingTitle, { color: currentColors.text }]}>{title}</Text>
            {subtitle && (
              <Text style={[styles.settingSubtitle, { color: currentColors.placeholder }]}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.settingRight}>
          {rightComponent || <Icon name="chevron-right" size={20} color={currentColors.placeholder} />}
        </View>
      </TouchableOpacity>
    );
  };

  renderEditModal = () => {
    const currentColors = this.getCurrentColors();
    
    return (
      <Modal
        visible={this.state.showEditModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => this.setState({ showEditModal: false })}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: currentColors.inputBackground }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: currentColors.text }]}>
                Edit {this.state.editingField}
              </Text>
              <TouchableOpacity onPress={() => this.setState({ showEditModal: false })}>
                <Icon name="close" size={24} color={currentColors.placeholder} />
              </TouchableOpacity>
            </View>
            
            <TextInput
              style={[styles.modalInput, { 
                backgroundColor: currentColors.background,
                color: currentColors.text,
                borderColor: currentColors.border,
              }]}
              value={this.state.editValue}
              onChangeText={(text) => this.setState({ editValue: text })}
              placeholder={`Enter ${this.state.editingField}`}
              placeholderTextColor={currentColors.placeholder}
              multiline={this.state.editingField === 'address'}
              numberOfLines={this.state.editingField === 'address' ? 3 : 1}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton, { borderColor: currentColors.border }]}
                onPress={() => this.setState({ showEditModal: false })}
              >
                <Text style={[styles.cancelButtonText, { color: currentColors.text }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton, { backgroundColor: currentColors.primary }]}
                onPress={this.saveFieldEdit}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  renderImagePickerModal = () => {
    const currentColors = this.getCurrentColors();
    
    return (
      <Modal
        visible={this.state.showImagePicker}
        animationType="slide"
        transparent={true}
        onRequestClose={() => this.setState({ showImagePicker: false })}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.imagePickerContent, { backgroundColor: currentColors.inputBackground }]}>
            <Text style={[styles.imagePickerTitle, { color: currentColors.text }]}>
              Change Profile Picture
            </Text>
            
            <TouchableOpacity
              style={styles.imageOption}
              onPress={() => this.selectImageOption('camera')}
            >
              <Icon name="camera-alt" size={24} color={currentColors.primary} />
              <Text style={[styles.imageOptionText, { color: currentColors.text }]}>Take Photo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.imageOption}
              onPress={() => this.selectImageOption('gallery')}
            >
              <Icon name="photo-library" size={24} color={currentColors.primary} />
              <Text style={[styles.imageOptionText, { color: currentColors.text }]}>Choose from Gallery</Text>
            </TouchableOpacity>
            
            {this.state.userProfile.profileImage && (
              <TouchableOpacity
                style={styles.imageOption}
                onPress={() => this.selectImageOption('remove')}
              >
                <Icon name="delete" size={24} color={currentColors.danger} />
                <Text style={[styles.imageOptionText, { color: currentColors.danger }]}>Remove Photo</Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity
              style={[styles.cancelImageButton, { backgroundColor: currentColors.background }]}
              onPress={() => this.setState({ showImagePicker: false })}
            >
              <Text style={[styles.cancelImageText, { color: currentColors.text }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    const currentColors = this.getCurrentColors();
    const { userProfile } = this.state;

    return (
      <View style={[styles.container, { backgroundColor: currentColors.background }]}>
        <StatusBar
          barStyle={this.state.isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={currentColors.background}
        />
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: currentColors.background }]}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={currentColors.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: currentColors.text }]}>Settings</Text>
          <View style={styles.headerRight} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Profile Section */}
          {this.renderProfileSection()}

          {/* Personal Information */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: currentColors.text }]}>Personal Information</Text>
            
            {this.renderSettingItem(
              <Icon name="email" size={20} color={currentColors.primary} />,
              'Email Address',
              userProfile.email,
              () => this.handleEditField('email', userProfile.email)
            )}
            
            {this.renderSettingItem(
              <Icon name="phone" size={20} color={currentColors.primary} />,
              'Phone Number',
              userProfile.phone,
              () => this.handleEditField('phone', userProfile.phone)
            )}
            
            {this.renderSettingItem(
              <Icon name="cake" size={20} color={currentColors.primary} />,
              'Date of Birth',
              userProfile.dateOfBirth,
              () => this.handleEditField('dateOfBirth', userProfile.dateOfBirth)
            )}
            
            {this.renderSettingItem(
              <Icon name="person-outline" size={20} color={currentColors.primary} />,
              'Gender',
              userProfile.gender,
              () => this.handleEditField('gender', userProfile.gender)
            )}
            
            {this.renderSettingItem(
              <Icon name="opacity" size={20} color={currentColors.primary} />,
              'Blood Group',
              userProfile.bloodGroup,
              () => this.handleEditField('bloodGroup', userProfile.bloodGroup)
            )}
            
            {this.renderSettingItem(
              <Icon name="location-on" size={20} color={currentColors.primary} />,
              'Address',
              userProfile.address,
              () => this.handleEditField('address', userProfile.address)
            )}
            
            {this.renderSettingItem(
              <Icon name="emergency" size={20} color={currentColors.primary} />,
              'Emergency Contact',
              userProfile.emergencyContact,
              () => this.handleEditField('emergencyContact', userProfile.emergencyContact)
            )}
          </View>

          {/* App Preferences */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: currentColors.text }]}>App Preferences</Text>
            
            {this.renderSettingItem(
              <Icon name={this.state.isDarkMode ? 'dark-mode' : 'light-mode'} size={20} color={currentColors.primary} />,
              'Dark Mode',
              this.state.isDarkMode ? 'Enabled' : 'Disabled',
              this.toggleDarkMode,
              <Switch
                value={this.state.isDarkMode}
                onValueChange={this.toggleDarkMode}
                trackColor={{ false: currentColors.border, true: currentColors.lightBlue }}
                thumbColor={this.state.isDarkMode ? currentColors.primary : '#f4f3f4'}
              />
            )}
            
            {this.renderSettingItem(
              <Icon name="notifications" size={20} color={currentColors.primary} />,
              'Notifications',
              this.state.notifications ? 'Enabled' : 'Disabled',
              () => this.setState({ notifications: !this.state.notifications }),
              <Switch
                value={this.state.notifications}
                onValueChange={(value) => this.setState({ notifications: value })}
                trackColor={{ false: currentColors.border, true: currentColors.lightBlue }}
                thumbColor={this.state.notifications ? currentColors.primary : '#f4f3f4'}
              />
            )}
            
            {this.renderSettingItem(
              <Icon name="location-on" size={20} color={currentColors.primary} />,
              'Location Services',
              this.state.locationServices ? 'Enabled' : 'Disabled',
              () => this.setState({ locationServices: !this.state.locationServices }),
              <Switch
                value={this.state.locationServices}
                onValueChange={(value) => this.setState({ locationServices: value })}
                trackColor={{ false: currentColors.border, true: currentColors.lightBlue }}
                thumbColor={this.state.locationServices ? currentColors.primary : '#f4f3f4'}
              />
            )}
            
            {this.renderSettingItem(
              <Icon name="fingerprint" size={20} color={currentColors.primary} />,
              'Biometric Authentication',
              this.state.biometricAuth ? 'Enabled' : 'Disabled',
              () => this.setState({ biometricAuth: !this.state.biometricAuth }),
              <Switch
                value={this.state.biometricAuth}
                onValueChange={(value) => this.setState({ biometricAuth: value })}
                trackColor={{ false: currentColors.border, true: currentColors.lightBlue }}
                thumbColor={this.state.biometricAuth ? currentColors.primary : '#f4f3f4'}
              />
            )}
          </View>

          {/* Support & Legal */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: currentColors.text }]}>Support & Legal</Text>
            
            {this.renderSettingItem(
              <Icon name="help-outline" size={20} color={currentColors.primary} />,
              'Help & Support',
              'Get help or contact us',
              () => console.log('Help pressed')
            )}
            
            {this.renderSettingItem(
              <Icon name="description" size={20} color={currentColors.primary} />,
              'Terms of Service',
              'Read our terms and conditions',
              () => console.log('Terms pressed')
            )}
            
            {this.renderSettingItem(
              <Icon name="privacy-tip" size={20} color={currentColors.primary} />,
              'Privacy Policy',
              'Learn about our privacy practices',
              () => console.log('Privacy pressed')
            )}
            
            {this.renderSettingItem(
              <Icon name="info-outline" size={20} color={currentColors.primary} />,
              'About',
              'Version 1.0.0',
              () => console.log('About pressed')
            )}
          </View>

          {/* Account Actions */}
          <View style={styles.section}>
            <TouchableOpacity
              style={[styles.logoutButton, { backgroundColor: currentColors.inputBackground }]}
              onPress={this.handleLogout}
            >
              <Icon name="logout" size={20} color={currentColors.secondary} />
              <Text style={[styles.logoutText, { color: currentColors.secondary }]}>Logout</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.deleteButton, { backgroundColor: currentColors.lightRed }]}
              onPress={this.handleDeleteAccount}
            >
              <Icon name="delete-forever" size={20} color={currentColors.danger} />
              <Text style={[styles.deleteText, { color: currentColors.danger }]}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Modals */}
        {this.renderEditModal()}
        {this.renderImagePickerModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerRight: {
    width: 40,
  },
  profileSection: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    marginBottom: 8,
  },
  verificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
  },
  settingRight: {
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 12,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    borderRadius: 16,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  modalInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 0.48,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    borderWidth: 1,
  },
  saveButton: {
    backgroundColor: colors.primary,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  imagePickerContent: {
    width: '90%',
    borderRadius: 16,
    padding: 20,
  },
  imagePickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  imageOptionText: {
    fontSize: 16,
    marginLeft: 16,
  },
  cancelImageButton: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  cancelImageText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SettingsScreen;