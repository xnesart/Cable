// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// document.addEventListener("click", documentActions);
function myFunctionn() {
  document.querySelector("#dropdown").classList.toggle("show");
  console.log("Клик");
}
$(document).ready(function () {
  $(".lines__slider").slick({
    infinite: false,
    // centerMode: true,
    // centerPadding: "55px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "15px",
        }
      }
    ]
  });
  $(".types__slider").slick({
    infinite: false,
    // centerMode: true,
    // centerPadding: "55px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "15px",
        }
      }
    ]
  });
  $(".news__slider").slick({
    infinite: false,
    // centerMode: true,
    // centerPadding: "55px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       centerPadding: "15px",
    //     }
    //   }
    // ]
  });
  $(".avaible__slider").slick({
    infinite: false,
    // centerMode: true,
    // centerPadding: "55px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  });
  $(".cable-description__slider").slick({
    // infinite: true,
    centerMode: false,
    centerPadding: "15px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: "cable-description__dots",
    prevArrow: $(".cable-description__arrow-right"),
    nextArrow: $(".cable-description__arrow-left"),
  });
  $(".main-header__slider").slick({
    // infinite: true,
    centerMode: false,
    centerPadding: "15px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $(".main-header__arrow-right"),
    nextArrow: $(".main-header__arrow-left"),
  });
});
// Close the dropdown if the user clicks outside of it
// window.onclick = function (e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementById("dropdown");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };
function documentActions(e) {
  document.addEventListener("click", documentActions);
	const targetElement = e.target;
	if (targetElement.closest('[data-parent]')) {
		const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		if (subMenu) {
			const activeLink = document.querySelector('._sub-menu-active');
			const activeBlock = document.querySelector('._sub-menu-open');


			if (activeLink && activeLink !== targetElement) {
				activeLink.classList.remove('_sub-menu-active');
				activeBlock.classList.remove('_sub-menu-open');
				document.documentElement.classList.remove('sub-menu-open');
			}
			document.documentElement.classList.toggle('sub-menu-open');
			targetElement.classList.toggle('_sub-menu-active');
			subMenu.classList.toggle('_sub-menu-open');

		} else {
			console.log('Ой ой, нет такого подменю :(')
		}
		e.preventDefault();
	}
	if (targetElement.closest('.menu-top-header__link_catalog')) {
		document.documentElement.classList.add('catalog-open');
		e.preventDefault();
	}
	if (targetElement.closest('.menu-catalog__back')) {
		document.documentElement.classList.remove('catalog-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
	if (targetElement.closest('.sub-menu-catalog__back')) {
		document.documentElement.classList.remove('sub-menu-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
}

if (document.querySelector('.filter-catalog__title')) {
	document.querySelector('.filter-catalog__title').addEventListener("click", function (e) {
		if (window.innerWidth < 992) {
			document.querySelector('.filter-catalog__items').classList.toggle('_active');
		}
	});
}