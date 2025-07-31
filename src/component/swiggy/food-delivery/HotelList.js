import Images from "../../common/image";
const hotelList = [
  {
    id: "01",
    hotel_name: "Champaran Handi Restaurant",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: "200 OFF ABOVE 999",
    offers: "yes",
    hotel_image: Images.noodles,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 250,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 200,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 150,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 288,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 255,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 200,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 190,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 250,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 285,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 300,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "02",
    hotel_name: "Raimens Cafe 79",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 300 OFF ABOVE 999",
    offers: "yes",
    hotel_image: Images.bakery,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 221,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 324,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 212,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 124,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 254,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 265,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 265,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "03",
    hotel_name: "The Fusion Lounge",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 200 OFF ABOVE 999",
    hotel_image: Images.noodles,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 323,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 325,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 135,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 233,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 545,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 345,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "04",
    hotel_name: "Blue Chilli Restaurant",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 200 OFF ABOVE 999",
    hotel_image: Images.biryani,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Biryani, Chicken Soup, Chillie Chicken",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "no",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "no",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 234,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "02",
        itemName: "Chillie Chicken",
        itemImage: Images.biryani,
        itemPrice: 423,
        itemSymbol: "non veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "05",
    hotel_name: "Urban Cafe",
    hotel_rating: "4.4 (4 ratings)",
    hotel_offer: "200 OFF ABOVE 999",
    offers: "yes",
    hotel_image: Images.maggie,
    hotel_food: "Snacks, Pizzas",
    hotel_location: "Chhindwara City",
    hotel_items:
      "Plain maggi, Cheese maggi, Mocha cold coffee, Cold coffee, Espresso cold coffee,Irish cold coffee,",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    buy_get_1_free: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 250,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 200,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 150,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 288,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 255,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 200,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 190,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 250,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 285,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 300,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "06",
    hotel_name: "Raimens Cafe 79",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 300 OFF ABOVE 999",
    offers: "yes",
    hotel_image: Images.bakery,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 221,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 324,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 212,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 124,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 254,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 265,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 265,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "07",
    hotel_name: "The Fusion Lounge",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 200 OFF ABOVE 999",
    hotel_image: Images.noodles,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 323,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 325,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 135,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 233,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 545,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 345,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "08",
    hotel_name: "Blue Chilli Restaurant",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 200 OFF ABOVE 999",
    hotel_image: Images.biryani,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Biryani, Chicken Soup, Chillie Chicken",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "no",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "no",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 234,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "02",
        itemName: "Chillie Chicken",
        itemImage: Images.biryani,
        itemPrice: 423,
        itemSymbol: "non veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "09",
    hotel_name: "Champaran Handi Restaurant",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: "200 OFF ABOVE 999",
    offers: "yes",
    hotel_image: Images.noodles,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 250,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 200,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 150,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 288,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 255,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 200,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 190,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 250,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 285,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 300,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "10",
    hotel_name: "Raimens Cafe 79",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 300 OFF ABOVE 999",
    offers: "yes",
    hotel_image: Images.bakery,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 221,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 324,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 212,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 124,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 254,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 265,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 265,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "11",
    hotel_name: "The Fusion Lounge",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 200 OFF ABOVE 999",
    hotel_image: Images.noodles,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Bakery, Ice Cream, Snacks, Cold drinks, Bread",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "yes",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "yes",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Paneer Tikka",
        itemImage: Images.paneerTikka,
        itemPrice: 323,
        itemSymbol: "veg",
        itemDescription:
          "Grilled and marinated cubes of tender Indian cheese, bursting with flavors, to tantalize your taste buds.",
      },
      {
        item_id: "02",
        itemName: "Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 325,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
      {
        item_id: "03",
        itemName: "Veg Lollipop",
        itemImage: Images.vegLollipop,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "Mouthwatering vegetarian delight perfect for your starters!",
      },
      {
        item_id: "04",
        itemName: "Bhindi Masala",
        itemImage: Images.bhindiMasala,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic vegetarian main course that will tantalize your taste buds with its rich blend of flavors.",
      },
      {
        item_id: "05",
        itemName: "Chana Masala",
        itemImage: Images.chanaMasala,
        itemPrice: 232,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and aromatic Indian curry dish packed with rich flavors and textures.",
      },
      {
        item_id: "06",
        itemName: "Sev Tamatar",
        itemImage: Images.sevTamatar,
        itemPrice: 135,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian main course featuring a delightful combination of flavors that will leave your taste buds wanting more.",
      },
      {
        item_id: "07",
        itemName: "Mushroom Masala",
        itemImage: Images.mushroomMasala,
        itemPrice: 233,
        itemSymbol: "veg",
        itemDescription:
          "A delectable and flavorful vegetarian main course featuring succulent mushrooms cooked to perfection in a rich, aromatic sauce.",
      },
      {
        item_id: "08",
        itemName: "Shahi Paneer",
        itemImage: Images.sahipaneer,
        itemPrice: 545,
        itemSymbol: "veg",
        itemDescription:
          "A creamy and aromatic Indian delight of succulent cottage cheese cooked in a luscious, flavorful sauce.",
      },
      {
        item_id: "09",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 345,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "10",
        itemName: "Chole Paneer",
        itemImage: Images.cholePaneer,
        itemPrice: 234,
        itemSymbol: "veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
  {
    id: "12",
    hotel_name: "Blue Chilli Restaurant",
    hotel_rating: "4.0 (1.2K+ ratings)",
    hotel_offer: " 200 OFF ABOVE 999",
    hotel_image: Images.biryani,
    hotel_food: "North Indian",
    hotel_location: "Noida",
    hotel_items: "Biryani, Chicken Soup, Chillie Chicken",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "no",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "no",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 234,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "02",
        itemName: "Chillie Chicken",
        itemImage: Images.biryani,
        itemPrice: 423,
        itemSymbol: "non veg",
        itemDescription:
          "A flavorful and hearty combination of tender paneer and protein-packed chickpeas in a delectable gravy.",
      },
    ],
  },
   {
    id: "13",
    hotel_name: "Megnum",
    hotel_rating: "4.8 (1.5K+ ratings)",
    hotel_offer: " 300 OFF ABOVE 999",
    hotel_image: Images.biryani,
    hotel_food: "South Indian",
    hotel_location: "Indirapuram",
    hotel_items: "Biryani, Chicken Soup, Chillie Chicken",
    restaurant_name: "Apni Rasoi Family Dhaba",
    fast_dilever: "no",
    deliver_timing: "25-30 mins",
    hotel_Availability: "yes",
    pure_veg: "no",
    hotel_item_lists: [
      {
        item_id: "01",
        itemName: "Chicken Biryani",
        itemImage: Images.biryani,
        itemPrice: 234,
        itemSymbol: "non veg",
        itemDescription:
          "A luscious and creamy vegetarian delight featuring a perfect blend of spinach and soft pieces of homemade cheese.",
      },
      {
        item_id: "02",
        itemName: "Chillie Veg Manchurian",
        itemImage: Images.vegManchurian,
        itemPrice: 199,
        itemSymbol: "veg",
        itemDescription:
          "A delectable vegetarian delight, bursting with flavor and perfect for a hearty starter.",
      },
    ],
  },
];
export default hotelList;
