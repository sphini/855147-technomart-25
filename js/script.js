var link = document.querySelector(".btn-section-contacts");
var popupFeedback = document.querySelector(".popup-feedback");
var popupClose = document.querySelector(".popup-feedback-close");
var popupFeedbackLogin = document.querySelector(".feedback-form-name");
var popupFeedbackEmail = document.querySelector(".feedback-form-email");
var popupFeedbackText = document.querySelector(".feedback-form-text");
var popupFeedbackForm = document.querySelector(".feedback-form");
var storageFeedback = localStorage.getItem("popupFeedbackLogin");
var storageEmail = localStorage.getItem("popupFeedbackEmail");
var popupAdded = document.querySelector(".popup-added");
var linkBuyItem = document.querySelectorAll(".btn-buy-item");
var linkAddedClose = document.querySelector(".added-close");

[].forEach.call(linkBuyItem, function(linkBuyItem) {
  linkBuyItem.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupAdded.classList.add("popup-show");
  });
});

if(linkAddedClose) {
  linkAddedClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupAdded.classList.remove("popup-show");
  });
}

if(link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("popup-show");
    if (storageFeedback && storageEmail) {
      popupFeedbackLogin.value = storageFeedback;
      popupFeedbackEmail.value = storageEmail;
      popupFeedbackText.focus();
    } else { popupFeedbackLogin.focus(); }
});
}

if(popupClose) {
popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("popup-show");
});
}

if(popupFeedbackForm) {
  popupFeedbackForm.addEventListener("submit", function(evt) {
    if (!popupFeedbackLogin.value || !popupFeedbackEmail.value || !popupFeedbackText.value) {
    evt.preventDefault();
    } else {
    localStorage.setItem("popupFeedbackLogin", popupFeedbackLogin.value)
    localStorage.setItem("popupFeedbackEmail", popupFeedbackEmail.value)
    }
  });
}

var tabDelivery = document.querySelector("#tab-delivery");
var tabWarranty = document.querySelector("#tab-warranty");
var tabCredit = document.querySelector("#tab-credit");
var containerDelivery = document.querySelector(".tab-delivery");
var containerWarranty = document.querySelector(".tab-guarantee");
var containerCredit = document.querySelector(".tab-credit");
var servicesTabsAction = document.querySelector(".services-tabs");

if (servicesTabsAction) {
servicesTabsAction.addEventListener("change", function() {
  containerDelivery.classList.remove("tabs-container-checked");
  containerWarranty.classList.remove("tabs-container-checked");
  containerCredit.classList.remove("tabs-container-checked");
  if(tabDelivery.checked) {
    containerDelivery.classList.toggle("tabs-container-checked");
  }
  if(tabWarranty.checked) {
    containerWarranty.classList.toggle("tabs-container-checked");
  }
  if(tabCredit.checked) {
    containerCredit.classList.toggle("tabs-container-checked");
  }
});
}

var linkMap = document.querySelector(".map-small");
var popupMap = document.querySelector(".popup-map");
var popupMapClose = document.querySelector(".popup-map-close");

if(linkMap) {
linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-show");
});
}

if(popupMap) {
popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-show");
});
}

if(popupMap) {
popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-show");
});
}

var slides = document.querySelectorAll(".slider-item");
var controlSlideLeft = document.querySelector(".slider-left");
var controlSlideRight = document.querySelector(".slider-right");
var currentSlide = 0;

function nextSlide() {
 slides[currentSlide].classList.remove("slider-item-current");
  goToSlide(currentSlide+1);
 slides[currentSlide].classList.add("slider-item-current");
}
function previousSlide() {
slides[currentSlide].classList.remove("slider-item-current");
  goToSlide(currentSlide-1);
slides[currentSlide].classList.add("slider-item-current");
}

function goToSlide(n) {
    currentSlide = (n+slides.length)%slides.length;
}

if (controlSlideLeft) {
controlSlideLeft.addEventListener("click", function (evt) {
previousSlide();
});
}

if (controlSlideRight) {
controlSlideRight.addEventListener("click", function (evt) {
nextSlide();
});
}
