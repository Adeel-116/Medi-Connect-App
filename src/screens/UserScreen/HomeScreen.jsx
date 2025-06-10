import React, { useContext} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../context/AuthContext';
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
};

export function HomeScreen() {
      const { user } = useContext(AuthContext);
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.welcomeSection}>
            <Text style={styles.greeting}>Good Morning, {user.fullName}</Text>
            <Text style={styles.subText}>How are you feeling today?</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={24} color={colors.primary} />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Health Status Card */}
        <View style={styles.healthStatusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusTitle}>Health Overview</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.statusMetrics}>
            <View style={styles.metricItem}>
              <Icon name="favorite" size={20} color={colors.secondary} />
              <Text style={styles.metricValue}>72</Text>
              <Text style={styles.metricLabel}>Heart Rate</Text>
            </View>
            <View style={styles.metricItem}>
              <Icon name="trending-up" size={20} color={colors.success} />
              <Text style={styles.metricValue}>120/80</Text>
              <Text style={styles.metricLabel}>Blood Pressure</Text>
            </View>
            <View style={styles.metricItem}>
              <FeatherIcon name="thermometer" size={20} color={colors.warning} />
              <Text style={styles.metricValue}>98.6°F</Text>
              <Text style={styles.metricLabel}>Temperature</Text>
            </View>
          </View>
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
            <TouchableOpacity>
              <AntIcon name="plus" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentLeft}>
              <View style={styles.doctorAvatar}>
                <Icon name="person" size={24} color={colors.primary} />
              </View>
              <View style={styles.appointmentInfo}>
                <Text style={styles.doctorName}>Dr. Sarah Ahmed</Text>
                <Text style={styles.specialty}>Cardiologist</Text>
                <Text style={styles.hospital}>City Medical Center</Text>
              </View>
            </View>
            <View style={styles.appointmentRight}>
              <Text style={styles.appointmentDate}>June 12</Text>
              <Text style={styles.appointmentTime}>2:30 PM</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Confirmed</Text>
              </View>
            </View>
          </View>

          <View style={styles.appointmentActions}>
            <TouchableOpacity style={styles.actionBtn}>
              <Icon name="videocam" size={16} color={colors.primary} />
              <Text style={styles.actionBtnText}>Join Video Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Icon name="chat" size={16} color={colors.primary} />
              <Text style={styles.actionBtnText}>Message Doctor</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.quickActionsCard}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIcon, { backgroundColor: colors.lightBlue }]}>
                <Icon name="search" size={24} color={colors.primary} />
              </View>
              <Text style={styles.actionText}>Find Doctor</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIcon, { backgroundColor: '#FFF3E0' }]}>
                <Icon name="local-pharmacy" size={24} color={colors.warning} />
              </View>
              <Text style={styles.actionText}>Prescriptions</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIcon, { backgroundColor: '#E8F5E8' }]}>
                <Icon name="assessment" size={24} color={colors.success} />
              </View>
              <Text style={styles.actionText}>Lab Results</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <View style={[styles.actionIcon, { backgroundColor: '#FFEBEE' }]}>
                <Icon name="folder" size={24} color={colors.secondary} />
              </View>
              <Text style={styles.actionText}>Medical Records</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: colors.lightBlue }]}>
                <Icon name="assignment" size={16} color={colors.primary} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Lab Results Available</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#FFF3E0' }]}>
                <Icon name="local-pharmacy" size={16} color={colors.warning} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Prescription Refill Ready</Text>
                <Text style={styles.activityTime}>1 day ago</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Health Tips */}
        <View style={styles.tipsCard}>
          <Text style={styles.sectionTitle}>Today's Health Tips</Text>
          <View style={styles.tipsList}>
            <View style={styles.tipItem}>
              <View style={styles.tipIcon}>
                <FeatherIcon name="droplet" size={16} color={colors.primary} />
              </View>
              <Text style={styles.tipText}>Drink at least 8 glasses of water daily for optimal hydration</Text>
            </View>
            
            <View style={styles.tipItem}>
              <View style={styles.tipIcon}>
                <Icon name="directions-run" size={16} color={colors.success} />
              </View>
              <Text style={styles.tipText}>Get 30 minutes of moderate exercise to boost your energy</Text>
            </View>
            
            <View style={styles.tipItem}>
              <View style={styles.tipIcon}>
                <FeatherIcon name="moon" size={16} color={colors.secondary} />
              </View>
              <Text style={styles.tipText}>Aim for 7-9 hours of quality sleep for better recovery</Text>
            </View>
          </View>
        </View>

        {/* Emergency Contact */}
        <TouchableOpacity style={styles.emergencyCard}>
          <View style={styles.emergencyContent}>
            <Icon name="local-hospital" size={24} color="#fff" />
            <Text style={styles.emergencyText}>Emergency Services</Text>
            <Text style={styles.emergencySubtext}>Tap for immediate help</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcomeSection: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  subText: {
    fontSize: 16,
    color: colors.placeholder,
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  healthStatusCard: {
    backgroundColor: colors.inputBackground,
    margin: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  viewAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  statusMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: colors.placeholder,
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: colors.inputBackground,
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  appointmentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  appointmentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  appointmentInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  specialty: {
    fontSize: 14,
    color: colors.placeholder,
    marginBottom: 2,
  },
  hospital: {
    fontSize: 12,
    color: colors.placeholder,
  },
  appointmentRight: {
    alignItems: 'flex-end',
  },
  appointmentDate: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  appointmentTime: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  appointmentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flex: 0.48,
    justifyContent: 'center',
  },
  actionBtnText: {
    marginLeft: 6,
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  quickActionsCard: {
    backgroundColor: colors.inputBackground,
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
    width: '22%',
    marginBottom: 16,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },
  activityList: {
    marginTop: -8,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: colors.placeholder,
  },
  tipsCard: {
    backgroundColor: colors.inputBackground,
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tipsList: {
    marginTop: -8,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  tipIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  emergencyCard: {
    backgroundColor: colors.secondary,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  emergencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
    marginRight: 8,
  },
  emergencySubtext: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9,
  },
});

export default HomeScreen;