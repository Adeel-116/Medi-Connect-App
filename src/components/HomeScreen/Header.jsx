import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import colors from '../../theme/Color'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Header() {
  return (
            <View style={styles.header}>
              <View style={styles.welcomeSection}>
                <Text style={styles.greeting}>Good Morning, {"Adeel"}</Text>
                <Text style={styles.subText}>How are you feeling today?</Text>
              </View>
              <TouchableOpacity style={styles.notificationButton}>
                <Icon name="notifications" size={24} color={colors.primary} />
                <View style={styles.notificationBadge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
              </TouchableOpacity>
            </View>
  )
}

export default Header

const styles = StyleSheet.create({
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
})
