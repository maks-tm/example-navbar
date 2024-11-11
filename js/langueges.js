const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en", "ge"];
let currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "en";
let currentTexts = {};


/* Home main page */
const homeTexts = {
	"title": {
		ru: "Аренда авто в Грузии.Быстро, удобно, качественно и безопасно с Carrents.ge",
		en: "Car rental in Georgia. Fast, convenient, high quality and safe with Carrents.ge",
		ge: "მანქანის დაქირავება საქართველოში. სწრაფი, მოსახერხებელი, ხარისხიანი და უსაფრთხო Carrents.ge-სთან ერთად",
	},
	/* header lang */
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Компании",
		en: "About company",
		ge: "ჩვენს შესახებ",
	},
    "cars": {
		ru: "Наши авто",
		en: "Our cars",
		ge: "მანქანები",
	},
	"pages": {
		ru: "Ссылки",
		en: "Pages",
		ge: "გვერდები",
	},
    "services": {
		ru: "Наши услуги",
		en: "Services",
		ge: "სერვისები",
	},
    "services_2": {
		ru: "Дополнительные услуги",
		en: "Additional services",
		ge: "დამატებითი სერვისები",
	},
    "blogs": {
		ru: "Блоги",
		en: "Blogs",
		ge: "ბლოგები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},

// Profile langs
    "sign_in": {
		ru: "Войти",
		en: "Login",
		ge: "შესვლა",
	},
	"sign_up": {
		ru: "Регистрация",
		en: "Register",
		ge: "რეგისტრაცია",
	},
	"my_orders": {
		ru: "Мои заказы",
		en: "My orders",
		ge: "ჩემი შეკვეთები",
	},
	"settings": {
		ru: "Настройки",
		en: "Settings",
		ge: "პარამეტრები",
	},
	"terms": {
		ru: "Правила",
		en: "Terms",
		ge: "პირობები",
	},
    "get_help": {
		ru: "Помощь клиентам",
		en: "Help",
		ge: "კონტაქტები",
	},
	"log_out": {
		ru: "Выйти",
		en: "Logout",
		ge: "გამოსვლა",
	},

	/* hero lang */
	
	/* about lang */
	
	/* services lang */
	
    /* Contact Pages Form langs */
	"contact_page_2": {
		ru: "Остались вопросы?",
		en: "Do you have any questions?",
		ge: "გაქვთ რაიმე შეკითხვები?",
	},
	"contact_page_sub1": {
		ru: "Заполните форму и мы свяжемся с Вами",
		en: "Fill out the form and we will contact you",
		ge: "შეავსეთ ფორმა და ჩვენ დაგიკავშირდებით",
	},
    "form_pl_1": {
		ru: "Ваше имя *",
		en: "Your name *",
		ge: "თქვენი სახელი *",
	},
	"form_pl_2": {
		ru: "Ваш email *",
		en: "Your email *",
		ge: "თქვენი ელფოსტა *",
	},
	"form_pl_3": {
		ru: "Телефон *",
		en: "Your phone *",
		ge: "ტელეფონის ნომერი *",
	},
	"form_pl_4": {
		ru: "Ваше сообщение *",
		en: "Your message *",
		ge: "თქვენი მესიჯი *",
	},
	"form_confirm_1": {
		ru: "Нажимая Отправить Вы соглашаетесь с",
		en: "By clicking Send you agree to",
		ge: "გაგზავნის დაწკაპუნებით თქვენ ეთანხმებით",
	},
	"form_confirm_2": {
		ru: "Политикой конфиденциальности",
		en: "privacy policy",
		ge: "კონფიდენციალურობის პოლიტიკა",
	},
	"form_confirm_3": {
		ru: "Отправить",
		en: "Send",
		ge: "გაგზავნა",
	},

	// Home page Footer languages
	"footer_title_1": {
		ru: "Навигация",
		en: "Company",
		ge: "ნავიგაცია",
	},
    "footer_title_2": {
		ru: "Ссылки",
		en: "Quick Links",
		ge: "სწრაფი ბმულები",
	},
    "footer_title_3": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
    "footer_title_4": {
		ru: "Связаться",
		en: "Follow us",
		ge: "მოგვყევით",
	},
	"footer-info_text_1": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი", 
	},
    "footer-info_text_2": {
		ru: "О Компании",
		en: "About company",
		ge: "ჩვენს შესახებ",
	},
    "footer-info_text_3": {
		ru: "Наши услуги",
		en: "Our services",
		ge: "ჩვენი სერვისები", 
	},
    "footer-info_text_4": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები", 
	},
    "footer-info_text_5": {
		ru: "Часто задаваемые вопросы",
		en: "Frequently Asked Questions",
		ge: "ხშირად დასმული კითხვები", 
	},
    "footer-info_text_6": {
		ru: "Наши автомобили",
		en: "Our cars",
		ge: "ჩვენი მანქანები", 
	},
	"footer-info_text_7": {
		ru: "Дополнительные услуги",
		en: "Additional services",
		ge: "დამატებითი სერვისები", 
	},
    "footer-info_text_8": {
		ru: "Правила и Условия",
		en: "Terms and Conditions",
		ge: "წესები და პირობები", 
	},
	"footer-info_text_9": {
		ru: "Tbilisi Eka Bezhanishvili 25",
		en: "Tbilisi Eka Bezhanishvili 25",
		ge: "თბილისი,ეკა ბეჟანიშვილის ქ.25", 
	},
};

/* about page */
const aboutTexts = {
	"title": {
		ru: "Аренда авто в Грузии.Быстро, удобно, качественно и безопасно с Carrents.ge",
		en: "Car rental in Georgia. Fast, convenient, high quality and safe with Carrents.ge",
		ge: "მანქანის დაქირავება საქართველოში. სწრაფი, მოსახერხებელი, ხარისხიანი და უსაფრთხო Carrents.ge-სთან ერთად",
	},
	/* header lang */
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Компании",
		en: "About Company",
		ge: "ჩვენს შესახებ",
	},
    "cars": {
		ru: "Наши авто",
		en: "Our cars",
		ge: "მანქანები",
	},
	"pages": {
		ru: "Ссылки",
		en: "Pages",
		ge: "გვერდები",
	},
    "services": {
		ru: "Наши услуги",
		en: "Services",
		ge: "სერვისები",
	},
    "services_2": {
		ru: "Дополнительные услуги",
		en: "Additional services",
		ge: "დამატებითი სერვისები",
	},
    "blogs": {
		ru: "Блоги",
		en: "Blogs",
		ge: "ბლოგები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},

	// Profile langs
    "sign_in": {
		ru: "Войти",
		en: "Login",
		ge: "შესვლა",
	},
	"sign_up": {
		ru: "Регистрация",
		en: "Register",
		ge: "რეგისტრაცია",
	},
	"my_orders": {
		ru: "Мои заказы",
		en: "My orders",
		ge: "ჩემი შეკვეთები",
	},
	"settings": {
		ru: "Настройки",
		en: "Settings",
		ge: "პარამეტრები",
	},
	"terms": {
		ru: "Правила",
		en: "Terms",
		ge: "პირობები",
	},
    "get_help": {
		ru: "Помощь клиентам",
		en: "Help",
		ge: "კონტაქტები",
	},
	"log_out": {
		ru: "Выйти",
		en: "Logout",
		ge: "გამოსვლა",
	},

	
	/* footer lang */
	
};

/* contact page */
const contactTexts = {
	"title": {
		ru: "Аренда авто в Грузии.Быстро, удобно, качественно и безопасно с Carrents.ge",
		en: "Car rental in Georgia. Fast, convenient, high quality and safe with Carrents.ge",
		ge: "მანქანის დაქირავება საქართველოში. სწრაფი, მოსახერხებელი, ხარისხიანი და უსაფრთხო Carrents.ge-სთან ერთად",
	},
	/* header lang */
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Компании",
		en: "About company",
		ge: "ჩვენს შესახებ",
	},
    "cars": {
		ru: "Наши авто",
		en: "Our cars",
		ge: "მანქანები",
	},
	"pages": {
		ru: "Ссылки",
		en: "Pages",
		ge: "გვერდები",
	},
    "services": {
		ru: "Наши услуги",
		en: "Our Services",
		ge: "სერვისები",
	},
    "services_2": {
		ru: "Дополнительные услуги",
		en: "Additional services",
		ge: "დამატებითი სერვისები",
	},
    "blogs": {
		ru: "Блоги",
		en: "Blogs",
		ge: "ბლოგები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},

    // Profile langs
    "sign_in": {
		ru: "Войти",
		en: "Login",
		ge: "შესვლა",
	},
	"sign_up": {
		ru: "Регистрация",
		en: "Register",
		ge: "რეგისტრაცია",
	},
	"my_orders": {
		ru: "Мои заказы",
		en: "My orders",
		ge: "ჩემი შეკვეთები",
	},
	"settings": {
		ru: "Настройки",
		en: "Settings",
		ge: "პარამეტრები",
	},
	"terms": {
		ru: "Правила",
		en: "Terms",
		ge: "პირობები",
	},
    "get_help": {
		ru: "Помощь клиентам",
		en: "Help",
		ge: "კონტაქტები",
	},
	"log_out": {
		ru: "Выйти",
		en: "Logout",
		ge: "გამოსვლა",
	},

	/* Pages Hero langs */
	"hero_title": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},

	/* Contact Pages titles langs */
	"contact_page_1": {
		ru: "Наши Контакты",
		en: "Our Contacts",
		ge: "ჩვენი კონტაქტები",
	},

	/* Contact Pages Info langs */
	"info_title_1": {
		ru: "Телефон",
		en: "Phone",
		ge: "ტელეფონი",
	},
	"info_text_1": {
		ru: "Наш контактный номер",
		en: "Our contact number",
		ge: "ჩვენი საკონტაქტო ნომერი",
	},
	"info_title_2": {
		ru: "E-mail",
		en: "E-mail",
		ge: "ელფოსტა",
	},
	"info_text_2": {
		ru: "Адрес электронной почты",
		en: "Our email address",
		ge: "ელფოსტის მისამართი",
	},

	"info_title_3": {
		ru: "Адрес компании",
		en: "Company address",
		ge: "კომპანიის მისამართი",
	},
	"info_text_3": {
		ru: "Тбилиси ул. Eka Bezhanishvili 25",
		en: "Tbilisi Eka Bezhanishvili 25",
		ge: "თბილისი,ეკა ბეჟანიშვილის ქ.25",  
	},
	
	"info_text_4": {
		ru: "Посмотреть на карте google",
		en: "View on Google map",
		ge: "გუგლის რუკაზე ნახვა",
	},
	
	/* Contact Pages Form langs */
	"contact_page_2": {
		ru: "Связаться с нами",
		en: "Contact us",
		ge: "დაგვიკავშირდით",
	},
	"contact_page_sub1": {
		ru: "Заполните форму и мы свяжемся с Вами",
		en: "Fill out the form and we will contact you",
		ge: "შეავსეთ ფორმა და ჩვენ დაგიკავშირდებით",
	},
    "form_pl_1": {
		ru: "Ваше имя *",
		en: "Your name *",
		ge: "თქვენი სახელი *",
	},
	"form_pl_2": {
		ru: "Ваш email *",
		en: "Your email *",
		ge: "თქვენი ელფოსტა *",
	},
	"form_pl_3": {
		ru: "Телефон *",
		en: "Your phone *",
		ge: "ტელეფონის ნომერი *",
	},
	"form_pl_4": {
		ru: "Ваше сообщение *",
		en: "Your message *",
		ge: "თქვენი მესიჯი *",
	},
	"form_confirm_1": {
		ru: "Нажимая Отправить Вы соглашаетесь с",
		en: "By clicking Send you agree to",
		ge: "გაგზავნის დაწკაპუნებით თქვენ ეთანხმებით",
	},
	"form_confirm_2": {
		ru: "Политикой конфиденциальности",
		en: "privacy policy",
		ge: "კონფიდენციალურობის პოლიტიკა",
	},
	"form_confirm_3": {
		ru: "Отправить",
		en: "Send",
		ge: "გაგზავნა",
	},

	// Contact page Footer languages
	"footer_title_1": {
		ru: "Навигация",
		en: "Company",
		ge: "ნავიგაცია",
	},
    "footer_title_2": {
		ru: "Ссылки",
		en: "Quick Links",
		ge: "სწრაფი ბმულები",
	},
    "footer_title_3": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
    "footer_title_4": {
		ru: "Связаться",
		en: "Follow us",
		ge: "მოგვყევით",
	},
    "footer-info_text_1": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი", 
	},
    "footer-info_text_2": {
		ru: "О Компании",
		en: "About company",
		ge: "ჩვენს შესახებ",
	},
    "footer-info_text_3": {
		ru: "Наши услуги",
		en: "Our services",
		ge: "ჩვენი სერვისები", 
	},
    "footer-info_text_4": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები", 
	},
    "footer-info_text_5": {
		ru: "Часто задаваемые вопросы",
		en: "Frequently Asked Questions",
		ge: "ხშირად დასმული კითხვები", 
	},
    "footer-info_text_6": {
		ru: "Наши автомобили",
		en: "Terms and Conditions",
		ge: "ჩვენი მანქანები", 
	},
    "footer-info_text_7": {
		ru: "Дополнительные услуги",
		en: "Additional services",
		ge: "დამატებითი სერვისები", 
	},
    "footer-info_text_8": {
		ru: "Правила и Условия",
		en: "Terms and Conditions",
		ge: "წესები და პირობები", 
	},
	"footer-info_text_9": {
		ru: "Tbilisi Eka Bezhanishvili 25",
		en: "Tbilisi Eka Bezhanishvili 25",
		ge: "თბილისი,ეკა ბეჟანიშვილის ქ.25", 
	},
};




// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			break;
		case "/about.html":
			currentTexts = aboutTexts;
			break;
		case "/services.html":
			currentTexts = servicesTexts;
			break;	
		case "/contact.html":
		   currentTexts = contactTexts;
			break;
		case "/order.html":
			currentTexts = orderTexts;
			break;	
		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();


// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "active");
			btn.classList.add("active");
			changeLang();
		}
	});
});


// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}


// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("active");
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("active");
			break;
		case "ge":
			document
				.querySelector('[data-btn="ge"]')
				.classList.add("active");
			break;

		default:
			document
				.querySelector('[data-btn="en"]')
				.classList.add("active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

// console.log("navigator.language", checkBrowserLang());

// let hash = window.location.hash + currentLang;
// console.log(hash);


// function changeURLLanguages () {
// 	location.href = window.location.pathname + '#' + hash;
// 	location.reload()
// }

// changeURLLanguages () 





