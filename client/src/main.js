import "./style.css";
import "./mediaQueries.css";

const galleries = {
  Animals: [
    {
      src: "./animals/deer.jpg",
      alt: "a picture of a red deer in the woods",
    },
    {
      src: "./animals/elephant.jpg",
      alt: "a picture of an elephant in the forest",
    },
    {
      src: "./animals/european-shorthair-cat.jpg",
      alt: "a picture of a european shorthair cat",
    },
    { src: "./animals/fox.jpg", alt: "an image of a fox taken during winter" },
    {
      src: "./animals/parrot-yellow-macaw.jpg",
      alt: "a beautiful yellow macau parrot",
    },
    {
      src: "./animals/dalmatian-dog.jpg",
      alt: "a picture of a dalmatian dog pet playing with falling leaves on a path of a park during autumn.",
    },
  ],
  Food: [
    {
      src: "./pictures/foods/20221207-BeefStew-Maureen-Celestine-3633-ff1ef82f656d40b6a415a1764821026f.jpeg",
      alt: "An image of Nigerian beef stew",
    },
    {
      src: "./pictures/foods/chilean-style-beef-empanadas-3029728-hero-01-c2bcd8b6df1c4ecf8aa1145d25df55b8.jpg",
      alt: "An image of empanadas, a Chilean meal",
    },
    {
      src: "./pictures/foods/french-food-1536x1024.jpg",
      alt: "An image of a French meal",
    },
    {
      src: "./pictures/foods/Ricotta-Polpette-FT-RECIPE0723-420aee27e58a410080366740cd1aa08c.jpg",
      alt: "An image of a Ricotta Polpette, an Italian meal",
    },
    {
      src: "./pictures/foods/Shakshuka_FT_RECIPE0224-173f35ee79c242e99de6e5f644e51f9f.jpg",
      alt: "an image of a Shakshuka meal, a Moroccan dish",
    },
    {
      src: "./pictures/foods/UK-Blog_Guideto-JapaneseFood_Header_Desktop.jpg",
      alt: "an image of a Japanese sushi meal",
    },
  ],
  Mountains: [
    {
      src: "./pictures/mountains/310977622_5411643348954520_8452311487660305390_n.jpg",
      alt: "a cow grazing in a field at sunset, with a tent set up nearby and mountains in the background",
    },
    {
      src: "./pictures/mountains/420061874_6979913325460840_3221354891956473293_n.jpg",
      alt: "a wooden boardwalk winds through a lush green landscape with a lake and a bench, and snow-capped mountains in the distance",
    },
    {
      src: "./pictures/mountains/420088236_6979913328794173_3756764712976262459_n.jpg",
      alt: "a view of a fjord with towering cliffs and mountains reflected in the calm water",
    },
    {
      src: "./pictures/mountains/BeautyPlus_20211014123628783_save.jpg",
      alt: "a dramatic landscape of Ben Nevis with clouds swirling around the peaks",
    },
    {
      src: "./pictures/mountains/IMG_20220829_154146.jpg",
      alt: "view of a mountain range with snow-covered peaks and glaciers",
    },
    {
      src: "./pictures/mountains/IMG-20240117-WA0182.jpg",
      alt: "a photo of a tall steep mountain covered in trees with snow-capped summit.",
    },
  ],
  Sports: [
    {
      src: "https://i.dailymail.co.uk/i/pix/2013/01/15/article-2262779-16EA2920000005DC-791_1024x615_large.jpg",
      alt: "A picture of footballer making a ferocious tackle",
    },
    {
      src: "https://sportsbyte.sunderland.ac.uk/wp-content/uploads/2023/05/1416166644.0-scaled.jpg",
      alt: "A picture of Leon Edwards knocking out Kumaru Usman in round 5 with a headkick to win the title",
    },
    {
      src: "https://i.pinimg.com/originals/f0/ec/57/f0ec57a192f6e8c49f7d3ca72a12003b.jpg",
      alt: "A picure of Lebron James making a historic dunk",
    },
    {
      src: "https://cdn.britannica.com/76/187976-050-7EF67E13/Floyd-Mayweather-Jr-ducks-Philippines-Manny-Pacquiao-May-2-2015.jpg",
      alt: "A picture of a long long awaited boxing match between two boxing legends",
    },
    {
      src: "https://www.formula1.com/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2053149561.jpg",
      alt: "A picture off all the cars in Formula 1 at the 2024 Bahrain grand prix",
    },
    {
      src: "https://images.ctfassets.net/pjshm78m9jt4/94539_header/8998833fcabf3c3d53e199d6b57e0be3/importedImage94539_header",
      alt: "Englands 2003 Rugby World Cup winning squad",
    },
    {
      src: "https://e0.365dm.com/23/11/2048x1152/skysports-f1-start-2023-singapore-gp_6369777.jpg?20231123161407",
      alt: "Formula 1 cars vying for first position on the race track",
    },
  ],
};

//buttons from JAE (DOM)
const galleryContainer = document.getElementById("galleryContainer");
const popupContainer = document.getElementById("popupContainer");
const popupImage = document.getElementById("popupImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentGallery = [];
let currentIndex = 0;

//category thumbnails
Object.keys(galleries).forEach((category) => {
  const thumbnail = document.createElement("div");
  thumbnail.className = "gallery-thumbnail";
  thumbnail.textContent = category;

  thumbnail.addEventListener("click", () => {
    openGallery(category);
  });

  galleryContainer.appendChild(thumbnail);
});

//each category gallery
function openGallery(category) {
  currentGallery = galleries[category];
  currentIndex = 0;
  showPopupImage();
}

//popup image
function showPopupImage() {
  const image = currentGallery[currentIndex];
  popupImage.src = image.src;
  popupImage.alt = image.alt;
  popupContainer.classList.add("show");
}

//buttons
prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showPopupImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showPopupImage();
});

//close image
popupContainer.addEventListener("click", (e) => {
  if (e.target === imageViewer) {
    imageViewer.classList.remove("show");
  }
});
