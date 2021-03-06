const ratings = {
  sony: 1,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1,
};
// total stars
const starsTotal = 5;
//run getRatings when dom loads
document.addEventListener("DOMContentLoaded", getRatings);
//form elements
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

//intialize product
let product;

// product select change

productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  //eneable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// rating control change

ratingControl.addEventListener("blur", (e) => {
  const rating = e.target.value;

  // make sure 5 or under
  if (rating > 5) {
    alert("please rate 1 to 5");
    return;
  }
  // rating change
  ratings[product] = rating;
  getRatings();
});

//get ratings
function getRatings() {
  for (let rating in ratings) {
    // get percentage

    const starPercentage = (ratings[rating] / starsTotal) * 100;
    // round to neraest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;
    // add number rating
    document.querySelector(`.${rating} .number-rating`).style.width =
      starPercentageRounded;
  }
}
