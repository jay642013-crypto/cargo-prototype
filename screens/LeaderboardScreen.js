import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

/**
 * Regional Competition implementation.
 * Groups player rankings by city within the West Midlands region.
 */
const regions = ["Birmingham", "Coventry", "Walsall", "Wolverhampton", "Dudley"];

export default function LeaderboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>West Midlands Rankings</Text>
      {regions.map((city) => (
        <View key={city} style={styles.cityCard}>
          <Text style={styles.cityText}>{city} Top Rankings</Text>
          <Text style={styles.arrowIcon}>▼</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1B3245', 
    paddingHorizontal: 20 
  },
  title: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 50, 
    marginBottom: 20 
  },
  cityCard: { 
    backgroundColor: '#fff', 
    marginVertical: 8, 
    padding: 20, 
    borderRadius: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cityText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1B3245' 
  },
  arrowIcon: {
    color: '#1B3245',
    fontSize: 14
  }
});