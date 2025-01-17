import "./style.css";
import "./mediaQueries.css";
import "./form.js";

// Gallery categories and images
const galleries = {
  Animals: [
    {
      src: "./public/pictures/animals/deer.jpg",
      alt: "a picture of a red deer in the woods",
    },
    {
      src: "./public/pictures/animals/elephant.jpg",
      alt: "a picture of an elephant in the forest",
    },
    {
      src: "./public/pictures/animals/european-shorthair-cat.jpg",
      alt: "a picture of a european shorthair cat",
    },
    {
      src: "./public/pictures/animals/fox.jpg",
      alt: "an image of a fox taken during winter",
    },
    {
      src: "./public/pictures/animals/parrot-yellow-macau.jpg",
      alt: "a beautiful yellow macau parrot",
    },
    {
      src: "./public/pictures/animals/dalmatian-dog.jpg",
      alt: "a picture of a dalmatian dog pet playing with falling leaves on a path of a park during autumn.",
    },
  ],
  Food: [
    {
      src: "./public/pictures/foods/20221207-BeefStew-Maureen-Celestine-3633-ff1ef82f656d40b6a415a1764821026f.jpeg",
      alt: "An image of Nigerian beef stew",
    },
    {
      src: "./public/pictures/foods/chilean-style-beef-empanadas-3029728-hero-01-c2bcd8b6df1c4ecf8aa1145d25df55b8.jpg",
      alt: "An image of empanadas, a Chilean meal",
    },
    {
      src: "./public/pictures/foods/french-food-1536x1024.jpg",
      alt: "An image of a French meal",
    },
    {
      src: "./public/pictures/foods/Ricotta-Polpette-FT-RECIPE0723-420aee27e58a410080366740cd1aa08c.jpg",
      alt: "An image of a Ricotta Polpette, an Italian meal",
    },
    {
      src: "./public/pictures/foods/Shakshuka_FT_RECIPE0224-173f35ee79c242e99de6e5f644e51f9f.jpg",
      alt: "an image of a Shakshuka meal, a Moroccan dish",
    },
    {
      src: "./public/pictures/foods/UK-Blog_Guideto-JapaneseFood_Header_Desktop.jpg",
      alt: "an image of a Japanese sushi meal",
    },
  ],
  Mountains: [
    {
      src: "./public/pictures/mountains/310977622_5411643348954520_8452311487660305390_n.jpg",
      alt: "a cow grazing in a field at sunset, with a tent set up nearby and mountains in the background",
    },
    {
      src: "./public/pictures/mountains/420061874_6979913325460840_3221354891956473293_n.jpg",
      alt: "a wooden boardwalk winds through a lush green landscape with a lake and a bench, and snow-capped mountains in the distance",
    },
    {
      src: "./public/pictures/mountains/420088236_6979913328794173_3756764712976262459_n.jpg",
      alt: "a view of a fjord with towering cliffs and mountains reflected in the calm water",
    },
    {
      src: "./public/pictures/mountains/BeautyPlus_20211014123628783_save.jpg",
      alt: "a dramatic landscape of Ben Nevis with clouds swirling around the peaks",
    },
    {
      src: "./public/pictures/mountains/IMG_20220829_154146.jpg",
      alt: "view of a mountain range with snow-covered peaks and glaciers",
    },
    {
      src: "./public/pictures/mountains/IMG-20240117-WA0182.jpg",
      alt: "a photo of a tall steep mountain covered in trees with snow-capped summit.",
    },
  ],
  Sports: [
    {
      src: "./public/pictures/sports/article-2262779-16EA2920000005DC-791_1024x615_large.jpg",
      alt: "A picture of footballer making a ferocious tackle",
    },
    {
      src: "./public/pictures/sports/1416166644.0-scaled.jpg",
      alt: "A picture of Leon Edwards knocking out Kumaru Usman in round 5 with a headkick to win the title",
    },
    {
      src: "./public/pictures/sports/f0ec57a192f6e8c49f7d3ca72a12003b.jpg",
      alt: "A picture of LeBron James making a historic dunk",
    },
    {
      src: "./public/pictures/sports/Floyd-Mayweather-Jr-ducks-Philippines-Manny-Pacquiao-May-2-2015.jpg",
      alt: "A picture of a long awaited boxing match between two boxing legends",
    },
    {
      src: "./public/pictures/sports/skysports-f1-start-2023-singapore-gp_6369777.jpg",
      alt: "A picture of all the cars in Formula 1 at the 2024 Bahrain Grand Prix",
    },
    {
      src: "./public/pictures/sports/importedImage94539_header.jpg",
      alt: "England's 2003 Rugby World Cup winning squad",
    },
  ],
};

// Get references to the HTML elements
const thumbnailContainer = document.getElementById("thumbnail");
const largeImageContainer = document.getElementById("largeImageContainer");

// Create thumbnails for each category
Object.keys(galleries).forEach((category) => {
  const thumbnail = document.createElement("div");
  thumbnail.className = "gallery-thumbnail";
  thumbnail.textContent = category;

  thumbnail.addEventListener("click", () => {
    openGallery(category);
  });

  thumbnailContainer.appendChild(thumbnail);
});

// Function to open gallery and render images for the selected category
function openGallery(category) {
  const selectedGallery = galleries[category];
  largeContainerRender(selectedGallery);
}

// Function to render images in the large container
function largeContainerRender(images) {
  largeImageContainer.innerHTML = ""; // Clear the container before adding new images

  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add("large-image");

    largeImageContainer.appendChild(img);
  });
}

// Scroll to top button
document.querySelector(".goToPbtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
