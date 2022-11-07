// import { v4 as uuidv4 } from 'uuid';

// const SHOP_DATA = [
//     {
//       id: uuidv4(),
//       title: 'Hats',
//       routeName: 'hats',
//       imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLL-aHkL5Ja6l9YY4sxhKLH6IgKtJqH_6HA&usqp=CAU',
//       items: [
//         {
//           id: uuidv4(),
//           name: 'Brown Brim',
//           imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//           price: 25
//         },
//         {
//           id: uuidv4(),
//           name: 'Blue Beanie',
//           imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//           price: 18
//         },
//         {
//           id: uuidv4(),
//           name: 'Brown Cowboy',
//           imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
//           price: 35
//         },
//         {
//           id: uuidv4(),
//           name: 'Grey Brim',
//           imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
//           price: 25
//         },
//         {
//           id: uuidv4(),
//           name: 'Green Beanie',
//           imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
//           price: 18
//         },
//         {
//           id: uuidv4(),
//           name: 'Palm Tree Cap',
//           imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
//           price: 14
//         },
//         {
//           id: uuidv4(),
//           name: 'Red Beanie',
//           imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
//           price: 18
//         },
//         {
//           id: uuidv4(),
//           name: 'Wolf Cap',
//           imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
//           price: 14
//         },
//         {
//           id: uuidv4(),
//           name: 'Blue Snapback',
//           imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
//           price: 16
//         }
//       ]
//     },
//     {
//       id: uuidv4(),
//       title: 'Sneakers',
//       routeName: 'sneakers',
//       imageUrl: 'https://i.pinimg.com/736x/af/91/f2/af91f26c31c2c9d39d31d55ffa8b1252.jpg',
//       items: [
//         {
//           id: uuidv4(),
//           name: 'Adidas NMD',
//           imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
//           price: 220
//         },
//         {
//           id: uuidv4(),
//           name: 'Adidas Yeezy',
//           imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
//           price: 280
//         },
//         {
//           id: uuidv4(),
//           name: 'Black Converse',
//           imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
//           price: 110
//         },
//         {
//           id: uuidv4(),
//           name: 'Nike White AirForce',
//           imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
//           price: 160
//         },
//         {
//           id: uuidv4(),
//           name: 'Nike Red High Tops',
//           imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
//           price: 160
//         },
//         {
//           id: uuidv4(),
//           name: 'Nike Brown High Tops',
//           imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
//           price: 160
//         },
//         {
//           id: uuidv4(),
//           name: 'Air Jordan Limited',
//           imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
//           price: 190
//         },
//         {
//           id: uuidv4(),
//           name: 'Timberlands',
//           imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
//           price: 200
//         }
//       ]
//     },
//     {
//       id: uuidv4(),
//       title: 'Jackets',
//       routeName: 'jackets',
//       imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHe8h96HIKdJF3Wwx4Ig1XVeurFVCMa5wHQw&usqp=CAU',
//       items: [
//         {
//           id: uuidv4(),
//           name: 'Black Jean Shearling',
//           imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
//           price: 125
//         },
//         {
//           id: uuidv4(),
//           name: 'Blue Jean Jacket',
//           imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
//           price: 90
//         },
//         {
//           id: uuidv4(),
//           name: 'Grey Jean Jacket',
//           imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
//           price: 90
//         },
//         {
//           id: uuidv4(),
//           name: 'Brown Shearling',
//           imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
//           price: 165
//         },
//         {
//           id: uuidv4(),
//           name: 'Tan Trench',
//           imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
//           price: 185
//         }
//       ]
//     },
//     {
//       id: uuidv4(),
//       title: 'Womens',
//       routeName: 'womens',
//       size: 'large',
//       imageUrl: 'https://media.istockphoto.com/photos/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run-picture-id1347431090?b=1&k=20&m=1347431090&s=170667a&w=0&h=9PyRbKzQaGD6jEoxfpNn7FcVz-JScKWi8IBusE2OlqU=',
//       items: [
//         {
//           id: uuidv4(),
//           name: 'Blue Tanktop',
//           imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
//           price: 25
//         },
//         {
//           id: uuidv4(),
//           name: 'Floral Blouse',
//           imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
//           price: 20
//         },
//         {
//           id: uuidv4(),
//           name: 'Floral Dress',
//           imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
//           price: 80
//         },
//         {
//           id: uuidv4(),
//           name: 'Red Dots Dress',
//           imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
//           price: 80
//         },
//         {
//           id: uuidv4(),
//           name: 'Striped Sweater',
//           imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
//           price: 45
//         },
//         {
//           id: uuidv4(),
//           name: 'Yellow Track Suit',
//           imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
//           price: 135
//         },
//         {
//           id: uuidv4(),
//           name: 'White Blouse',
//           imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
//           price: 20
//         }
//       ]
//     },
//     {
//       id: uuidv4(),
//       title: 'Mens',
//       routeName: 'mens',
//       size: 'large',
//       imageUrl: 'https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?k=20&m=1319763895&s=612x612&w=0&h=kdi1vWYAjSj4jOL5UPFPERsfid2gPkwZN8TCYWycmnA=',
//       items: [
//         {
//           id: uuidv4(),
//           name: 'Camo Down Vest',
//           imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
//           price: 325
//         },
//         {
//           id: uuidv4(),
//           name: 'Floral T-shirt',
//           imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
//           price: 20
//         },
//         {
//           id: uuidv4(),
//           name: 'Black & White Longsleeve',
//           imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
//           price: 25
//         },
//         {
//           id: uuidv4(),
//           name: 'Pink T-shirt',
//           imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
//           price: 25
//         },
//         {
//           id: uuidv4(),
//           name: 'Jean Long Sleeve',
//           imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
//           price: 40
//         },
//         {
//           id: uuidv4(),
//           name: 'Burgundy T-shirt',
//           imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
//           price: 25
//         }
//       ]
//     }
//   ];
  
//   export default SHOP_DATA;
  