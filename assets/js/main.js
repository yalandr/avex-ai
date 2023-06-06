// QUERY SELECTOR SNIPPET
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const selectAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

// DATE
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
selectAll(".date").forEach((el) => (el.innerText = `${dd}/${mm}/${yyyy}`));

// NAVIGATION
const scrollToElem = (elem) => {
  select(elem).scrollIntoView({ behavior: "smooth" });
};

// YEAR
selectAll(".year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});

// REVEALING ON SCROLL
const the_animation = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //     entry.target.classList.remove('active')
      // }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// HERO PARALLAX EFFECT
window.addEventListener("scroll", () => {
  const heroSectionBg = document.querySelector(".hero-section-bg");
  heroSectionBg.style.transform = `translateY(${window.scrollY / 5}px)`;
});

// COMMENTS ADDING
const commentInput = document.querySelector("#comment");
const addedItemsList = document.querySelector(".live-comments-wrapper");
const addBtn = document.querySelector(".comment-submit-btn");

const addCommentItem = (commentText) => {
  let commentItem = ` 
        <div class="comment-card flex">
          <img src="assets/img/users/user.png" width="48" height="48" alt="New User" class="user-img" loading="lazy">
          <div class="comment-card-content">
              <h5 class="comment-user-name">
                  New User
              </h5>
              <p class="comment-text">
                  ${commentText}
              </p>
              <div class="operations flex center">
                  <button class="operations-btn">
                      Like
                  </button>
                  <span>&#183;</span>
                  <button class="operations-btn">
                      Reply
                  </button>
                  <span>&#183;</span>
                  <div class="comment-age">
                      now
                  </div>
              </div>
          </div>
        </div>
        `;
  addedItemsList.innerHTML += commentItem;
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let commentInputValue = commentInput.value;
  commentInputValue = commentInputValue.trim();
  if (commentInputValue == "") {
    return false;
  } else {
    addCommentItem(commentInputValue);
    commentInput.value = "";
  }
});

// Form Submission
let nameValue = document.querySelector(".name");
let lastnameValue = document.querySelector(".lastname");
let emailValue = document.querySelector(".email");
let phoneValue = document.querySelector(".phone");
let requiredFields = document.querySelectorAll(".required-fields");

const formSubmission = () => {
  if (
    nameValue.value != "" &&
    lastnameValue.value != "" &&
    emailValue.value != "" &&
    phoneValue.value != ""
  ) {
    window.location.href = "thankyou.html";
  } else {
    requiredFields.forEach((e) => {
      e.classList.add("visible");
    });
  }
};

const inputFields = document.querySelectorAll(
  ".name, .lastname, .email, .phone"
);
for (let inputItem of inputFields) {
  inputItem.addEventListener("focus", function () {
    requiredFields.forEach((e) => {
      if (e.classList.contains("visible")) {
        e.classList.remove("visible");
      }
    });
  });
}
