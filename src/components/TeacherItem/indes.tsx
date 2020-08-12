import React from "react";

import styles from "./styles";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: "https://github.com/poliveira13.png" }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Priscila Oliveira</Text>
          <Text style={styles.subject}>Artes</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        {"\n"}
        {"\n"}
        Voluptates quis dolorum ipsam repellendus autem corporis commodi nemo
        enim voluptate omnis aliquam reprehenderit, ut, itaque veritatis libero
        quisquam dolore consequuntur cupiditate. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Delectus, ex quae ipsa voluptatibus natus
        consequatur! Totam quae illo dolorem beatae eveniet facilis, voluptatum
        exercitationem, eos eaque in, deleniti animi libero. Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Odit ad eveniet enim fugit
        doloribus maxime quas autem ab atque tempore ipsa dolorum minima
        similique culpa sit praesentium quod, voluptatum cumque.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hota{"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unFavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
