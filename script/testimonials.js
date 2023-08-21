const testimonialData = [
  {
    image:
      "https://images.pexels.com/photos/15126611/pexels-photo-15126611/free-photo-of-proyek-oleh-profil-salon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "i am singel woman are you like me?",
    author: "Chandri Anggara",
    rating: "1",
  },
  {
    image:
      "https://images.pexels.com/photos/15157314/pexels-photo-15157314/free-photo-of-kacamata-hitam-wanita-duduk-rokok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "i am singel woman are you like me?",
    author: "Chandri Anggara",
    rating: "4",
  },
  {
    image:
      "https://images.pexels.com/photos/13926527/pexels-photo-13926527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "i am singel woman are you like me?",
    author: "Chandri Anggara",
    rating: "3",
  },
  {
    image:
      "https://images.pexels.com/photos/15093015/pexels-photo-15093015/free-photo-of-romantis-antik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "i am singel woman are you like me?",
    author: "Chandri Anggara",
    rating: "1",
  },
];

const dataIconRating = [
  {
    rating: "all",
  },
  {
    rating: "1",
  },
  {
    rating: "2",
  },
  {
    rating: "3",
  },
  {
    rating: "4",
  },
  {
    rating: "5",
  },
];

const selectAllRating = () => {
  let allRatingHtml = "";

  if (testimonialData.length == 0) {
    const messageEmptyData = document.getElementById("message-empty-data");
    messageEmptyData.style.display = "block";
    messageEmptyData.style.textAlign = "center";
    messageEmptyData.innerHTML = `<h2>Empty Data!!</h2>`;
  } else {
    testimonialData.forEach((item) => {
      allRatingHtml += `
        <div class="card-testimonial">
            <div class="image-testimonial">
                <img src="${item.image}" alt="testimonial" />
            </div>
            <div class="content-testimonial">
                <h4 class="quote">${item.quote}</h4>
                <p class="author">~${item.author}</p>
                <p class="author">
                ${item.rating}
                <i class="fa-solid fa-star"></i>
                </p>
            </div>
         </div>
                `;
    });
    const messageEmptyData = document.getElementById("message-empty-data");
    messageEmptyData.style.display = "none";
  }
  document.getElementById("card-content-testimonials").innerHTML =
    allRatingHtml;
};

selectAllRating();

const filterRating = (rating) => {
  let ratingHtml = "";

  const filtered = testimonialData.filter((item) => {
    return item.rating === rating;
  });

  if (filtered.length == 0) {
    const messageEmptyData = document.getElementById("message-empty-data");
    messageEmptyData.style.display = "block";
    messageEmptyData.style.textAlign = "center";
    messageEmptyData.style.marginTop = "40px";
    messageEmptyData.innerHTML = `<h2>Sory your data not found!!</h2>`;
  } else {
    const messageEmptyData = document.getElementById("message-empty-data");
    messageEmptyData.style.display = "none";
    filtered.forEach((item) => {
      ratingHtml += `
        <div class="card-testimonial">
            <div class="image-testimonial">
                <img src="${item.image}" alt="testimonial" />
            </div>
            <div class="content-testimonial">
                <h4 class="quote">${item.quote}</h4>
                <p class="author">~${item.author}</p>
                <p class="author">
                ${item.rating}
                <i class="fa-solid fa-star"></i>
                </p>
            </div>
         </div>
                `;
    });
  }

  document.getElementById("card-content-testimonials").innerHTML = ratingHtml;
};

const buttonClick = () => {
  let dataIcon = {};
  // icon
  const starSolid = "fa-solid fa-star";
  const starRegular = "fa-regular fa-star";

  // push kedalam icon
  dataIcon = {
    starSolid,
    starRegular,
  };

  // html element
  let iconHtml = "";
  const number = [1, 2, 3, 4, 5];

  const ratingButtonsOnClick = number
    .map(
      (num) => `
  <button class="select-rating" onclick="filterRating('${num}')">
    ${num}<i class="${dataIcon.starRegular}"></i>
  </button>
`
    )
    .join("");

  dataIconRating.forEach((item) => {
    if (item.rating === "all") {
      iconHtml += `
          <button class="select-rating" onclick="selectAllRating('all')">
            ${item.rating}<i class="${dataIcon.starSolid}"></i>
          </button>
        `;
    }
  });
  iconHtml += ratingButtonsOnClick;

  const createButtonElement = document.getElementById("select-rating");
  createButtonElement.innerHTML = iconHtml;
};

buttonClick();
