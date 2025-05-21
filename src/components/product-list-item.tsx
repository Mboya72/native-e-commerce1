import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Product } from '../../assets/types/product';
import { Link } from 'expo-router';

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
    <Pressable style={styles.item}>
      <View style={styles.itemImageContainer}>
        <Image source={product.heroImage} style={styles.itemImage} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{product.title}</Text>
        <Text style={styles.itemPrice}>${product.price}</Text>
      </View>
    </Pressable>
    </Link>
    
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  item: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
  },
  itemImageContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  itemTextContainer: {
    marginTop: 8,
  },
  itemTitle: {
    fontSize: 16,
    color: '#888',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
