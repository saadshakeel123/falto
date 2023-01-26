import Card from "./Card"

function Props() {
  let card = [
    {
      img:'https://wander-lush.org/wp-content/uploads/2020/01/SwatValleyPakistanSAKhanPhotographyCanvaPro.jpg',
      name:'SWAT VALLEY',
      img_class:"card-img-top",
      info:"This stunning valley in the Khyber Pakhtunkhwa province of Pakistan is something straight out of a fairy tale. ",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
      img:"https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Hunza-Valley-undefinedGetty-CanvaPro.jpg",
      name:'HUNZA VALLEY',
      img_class:"card-img-top",
      info:" If you live in Pakistan – or have read anything about the country – it’s almost certain you’ve come across the name Hunza",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
      img:'https://wander-lush.org/wp-content/uploads/2020/01/YarkhunValleySamanthaIntentionalDetours.jpg',
      name:'YARKHUN VALLEY',
      img_class:"card-img-top",
      info:" Located in the Upper Chitral district of Khyber Pakhtunkhwa, Yarkhun dazzles with its mountain ranges and untouched villages. ",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
      img:'https://wander-lush.org/wp-content/uploads/2020/01/PhanderLakePakistanKanokwanPonokCanvaPro.jpg',
      name:'PHANDER LAKE',
      img_class:"card-img-top",
      info:"Despite being insanely beautiful, Phander Lake doesn’t see anywhere as close to the number of tourists as the more popular Attabad Lake does.",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
      img:'https://wander-lush.org/wp-content/uploads/2020/01/LahorePakistanHomoCosmicosCanvaPro.jpg',
      name:'LAHORE',
      img_class:"card-img-top",
      info:" A city… Say what? Yes, Lahore may be a metro but its treasure trove of historical places surely makes it one of the most beautiful places to visit in Pakistan.",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
      img:'https://wander-lush.org/wp-content/uploads/2020/01/Beautiful-places-in-Pakistan-Hingol-National-Park-LukasBischoffGetty-CanvaPro.jpg',
      name:'HINGOL NATIONAL PARK',
      img_class:"card-img-top",
      info:">What’s more, part of the National Park hugs the coast, adding the ocean to all its other assets. Though totally out-of-this-world in its looks, Hingol is only 3.5 hours ",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
      img:'https://wander-lush.org/wp-content/uploads/2020/01/BamboretValleyPakistanPawopa3336CanvaPro.jpg',
      name:'KALASH VALLEYS"',
      img_class:"card-img-top",
      info:"The Kalash Valleys, comprised of Bumboret, Rumbur, and Birir, are home to the Kalash people, a religious and ethnic minority in Pakistan with their own beliefs.",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
      img:'https://wander-lush.org/wp-content/uploads/2020/01/Beautiful-places-in-Pakistan-Deosai-ShahsoftGetty-CanvaPro.jpg',
      class:"card-img-top",
      name:'DEOSAI PLAINS NATIONAL PARK',
      img_class:"card-img-top",
      info:"Deosai is often referred to as the roof of the world. And it kinda is. At 4,117 metres (13,497 feet), the massive plateau is the sec-heightest",
      btn: '#',
      card_class:"card-body",
      h5_class:"card-title",
      p_class:"card-text",
      a_class:"btn btn-primary"
    },
    {
        img:'https://wander-lush.org/wp-content/uploads/2020/01/ShahJahanMosqueMuhammadFarooqCanvaPro.jpg',
        name:'SHAH JAHAN MOSQUE',
        img_class:"card-img-top",
        info:"It’s widely known for having the most elaborate display of tile work in all of South Asia. Blue and sandstone colours adorn the interior of the mosque and are sure ",
        btn: '#',
        card_class:"card-body",
        h5_class:"card-title",
        p_class:"card-text",
        a_class:"btn btn-primary"
      }
    
  ];

  let newcard =card.map((item)=> {
    return (
      <Card data={item}/>
    )
  })
  
  
  return (
    <>
    {newcard}
    </>
  )
}

export default Props;