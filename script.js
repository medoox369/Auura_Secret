function switchLanguage(lang) {
  document.documentElement.lang = lang;

  // تحديث جميع العناصر التي تحتوي على بيانات اللغات
  document.querySelectorAll("[data-" + lang + "]").forEach((element) => {
    element.textContent = element.getAttribute("data-" + lang);
  });

  // تحديث العناصر النصية مثل placeholders في النماذج
  document.querySelectorAll("input, textarea").forEach((element) => {
    const placeholderAttr = "data-placeholder-" + lang;
    if (element.hasAttribute(placeholderAttr)) {
      element.placeholder = element.getAttribute(placeholderAttr);
    }
  });

  // تحديث عنوان الصفحة بناءً على اللغة المختارة
  const titles = {
    ar: "AUURA SECRET ✨",
    en: "AUURA SECRET ✨",
  };
  document.title = titles[lang];
}

// التمرير السلس لروابط التنقل
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// بدء الصفحة باللغة العربية
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("ar");
});

// إضافة زر لتغيير اللغة
document.getElementById("languageSwitch").addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  switchLanguage(currentLang === "ar" ? "en" : "ar");
});

// تقليب الصورة اتوماتيكا
document.querySelectorAll(".swiper").forEach((swiper) => {
  const images = swiper.querySelectorAll("img");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  // Initialize the first image
  images[currentIndex].classList.add("active");

  // Start the auto-flip interval
  setInterval(showNextImage, 3000); // Change image every 3 seconds
});

function toggleNav() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}


