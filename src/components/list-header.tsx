import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { CATEGORIES } from '../../assets/categories'

const ListHeader = () => {
  return (
    
     <View style={[styles.headerContainer]}>
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/99/f1/65/99f16566c375c3e2b921d0d2b389ca37.jpg' }}
              style={styles.avatarImage}
            />
            <Text style={styles.avatarText}>EmDesigns</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
        <Link href="/cart" asChild>
          <Pressable>
            {({ pressed }) => (
              <View style={styles.cartContainer}>
                <FontAwesome
                  name="shopping-cart"
                  size={24}
                  color={pressed ? '#1BC464' : 'black'}
                />
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{3}</Text>
                  </View>
              </View>
            )}
          </Pressable>
        </Link>
        <TouchableOpacity style={styles.signOutButton}>
          <FontAwesome
            name="sign-out"
            size={24}
            color="red"
            style={styles.signOutButton}
          />
        </TouchableOpacity> 
        </View>
    </View>
    <View style={styles.heroContainer}>
      <Image
      source={require('../../assets/images/hero.png')}
      style={styles.heroImage}
      />
    </View>
    <View style={styles.categoriesContainer}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={CATEGORIES}
        horizontal
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => (
          <Link asChild href={`/categories/${item.slug}` } >
            <Pressable style={styles.category}>
              <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.slug}</Text>
            </Pressable>
          </Link>
        )}
        contentContainerStyle={{ gap: 4 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
   </View>
  )
}

export default ListHeader

const styles = StyleSheet.create({
  headerContainer: {
    gap: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  avatarText: {
    fontSize: 15,
  },
  cartContainer: {
    padding: 10,
  },
  signOutButton: {
    padding: 10,
  },
  heroContainer: {
    width: '100%',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  categoriesContainer: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    width: 100,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryText: {},
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: 10,
    backgroundColor: '#1BC464',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});