//ФОРМА ЗАЯВКИ ДЛЯ БЕСПЛАТНОГО АУДИТА

document.addEventListener('DOMContentLoaded', function () {
    let currentQuestion = 1;
    const totalQuestions = 6; // Теперь вопросов 6

    const questions = [
        { label: "Вид бизнеса:", placeholder: "Введите вид бизнеса" },
        { label: "Город:", placeholder: "Введите ваш город" },
        { label: "Телефон:", placeholder: "Введите ваш номер телефона" },
        { label: "Ссылка на сайт и кабинет Авито:", placeholder: "Введите ссылку" },
        { label: "XLS отчет статистики за последние 30 дней из AvitoPro (при наличии):", placeholder: "Выберите файл", type: "file", optional: true },
        { label: "Комментарий:", placeholder: "Оставьте комментарий", type: "text" }
    ];

    const progressElement = document.getElementById('progress');
    const questionCounter = document.getElementById('question-counter');
    const formLabel = document.getElementById('form-label');
    const inputField = document.getElementById('input-field');
    const nextButton = document.getElementById('next-btn');
    const auditForm = document.getElementById('audit-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    // Элементы для примера отчета XLS
    const xlsLink = document.getElementById('xls-link');
    const xlsImage = document.getElementById('xls-image');
    const xlsExampleContainer = document.getElementById('xls-example-container'); // Контейнер для отображения XLS примера

    // Показать/скрыть изображение при нажатии на ссылку
    xlsLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (xlsImage.style.display === 'none') {
            xlsImage.style.display = 'block';
        } else {
            xlsImage.style.display = 'none';
        }
    });

    function updateForm() {
        const progressPercent = (currentQuestion / totalQuestions) * 100;
        progressElement.style.width = `${progressPercent}%`;
        questionCounter.textContent = `Вопрос ${currentQuestion} / ${totalQuestions}`;

        // Обновляем поле формы
        formLabel.textContent = questions[currentQuestion - 1].label;
        inputField.placeholder = questions[currentQuestion - 1].placeholder;

        // Если вопрос включает файл
        if (questions[currentQuestion - 1].type === "file") {
            inputField.type = "file";
        } else {
            inputField.type = "text";
        }

        // Показываем/скрываем блок примера XLS только на вопросе №5
        if (currentQuestion === 5) {
            xlsExampleContainer.style.display = 'block';
        } else {
            xlsExampleContainer.style.display = 'none';
        }

        // Очищаем поле ввода после каждого вопроса
        inputField.value = '';

        // Скрываем сообщение об ошибке при переходе к новому вопросу
        errorMessage.style.display = 'none';
    }

    nextButton.addEventListener('click', function () {
        // Проверяем, что поле заполнено, если оно не является файлом или необязательным полем
        if (questions[currentQuestion - 1].type !== "file" && inputField.value.trim() === '') {
            errorMessage.textContent = 'Пожалуйста, заполните поле перед переходом к следующему вопросу.';
            errorMessage.style.display = 'block';
            return;
        }

        // Если это последний вопрос, показать сообщение об успешной отправке
        if (currentQuestion === totalQuestions) {
            auditForm.style.display = 'none'; // Скрыть форму
            questionCounter.style.display = 'none'; // Скрыть счетчик вопросов
            successMessage.style.display = 'block'; // Показать сообщение "Заявка отправлена"
        } else {
            currentQuestion++;
            updateForm();
        }
    });

    // Инициализация формы
    updateForm();
});

// ОТЗЫВЫ

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.reviews-block');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Функция для обновления отображаемого отзыва
    function updateReview(index) {
        reviews.forEach((review, i) => {
            review.classList.toggle('active', i === index);
        });
    }

    // Обработчик для кнопки "Предыдущий"
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateReview(currentIndex);
    });

    // Обработчик для кнопки "Следующий"
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateReview(currentIndex);
    });
});

// ПРИМЕРЫ РАБОТ

document.addEventListener('DOMContentLoaded', function() {
    // Слайдер статистики
    (function() {
        const slidesContainer = document.querySelector('.statistics-slides');
        const slides = document.querySelectorAll('.statistics-slide');
        const prevBtn = document.querySelector('.statistics-prev-btn');
        const nextBtn = document.querySelector('.statistics-next-btn');
        let currentIndex = 0;

        function updateSlide(index) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        updateSlide(currentIndex);

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide(currentIndex);
        });

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide(currentIndex);
        });
    })();

    // Слайдер инфографики
    (function() {
        const slidesContainer = document.querySelector('.infographic-slides');
        const slides = document.querySelectorAll('.infographic-slide');
        const prevBtn = document.querySelector('.infographic-prev-btn');
        const nextBtn = document.querySelector('.infographic-next-btn');
        let currentIndex = 0;

        function updateSlide(index) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        updateSlide(currentIndex);

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide(currentIndex);
        });

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide(currentIndex);
        });
    })();
});


