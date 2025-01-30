<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Курінь 117 ім. Івана Чмоли</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: rgb(106, 113, 120);
            margin: 0;
            padding: 0;
            color: #333;
        }
        header {
            color: white;
            text-align: center;
            padding: 1.5rem 0;
        }
        nav {
            text-align: center;
            background-color: #444;
            padding: 10px;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-size: 18px;
        }
        .container {
            max-width: 1000px;
            margin: 20px auto;
            padding: 0 20px;
        }
        .content-section {
            background-color: white;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin-bottom: 20px;
            display: none;
        }
        .img-container {
            text-align: center;
            margin: 20px 0;
        }
        footer {
            text-align: center;
            padding: 1rem 0;
            background-color: #333;
            color: white;
            margin-top: 40px;
        }
        .active {
            display: block;
        }
        .img-container img {
            width: 100%;
            max-width: 800px;
            height: auto;
        }
    </style>
</head>
<body>
    <header>
        <h1>Курінь 117 ім. Івана Чмоли</h1>
    </header>
    <nav>
        <a href="javascript:void(0);" onclick="showSection('home')">Головна</a> | 
        <a href="javascript:void(0);" onclick="showSection('history')">Історія</a> | 
        <a href="javascript:void(0);" onclick="showSection('achievements')">Досягнення</a> | 
        <a href="javascript:void(0);" onclick="showSection('posts')">Дописи</a>
    </nav>
    <div class="container">
        <!-- Головна -->
        <div class="content-section" id="home">
            <h2>Ласкаво просимо до Куреня!</h2>
            <p>Ми активно розвиваємось і завжди відкриті до нових ідей та ініціатив. Приєднуйтесь до нашої родини!</p>
            <div class="img-container">
                <img src="kurin-photo.jpg" alt="Фото куреня">
            </div>
        </div>
        
        <!-- Історія -->
        <div class="content-section" id="history">
            <h2>Історія Куреня</h2>
            <p>Курінь 117 ім. Івана Чмоли був заснований у 2017 році трьома однодумцями: Романом Трухіним, Ростиславом Антимисом та Кравцем Остапом. Метою їх створення було поєднання військової спеціалізації та пластунської діяльності.</p>
            <div class="img-container">
                <img src="kurin-history.jpg" alt="Фото з історії куреня">
            </div>
            <p>З того часу курінь активно розвивається, організовує заходи та підтримує традиції пластунства.</p>
        </div>
        
        <!-- Досягнення -->
        <div class="content-section" id="achievements">
            <h2>Досягнення</h2>
            <ul>
                <li>
                    <h3>Табір 2023</h3>
                    <p>Найуспішніший табір, який зібрав понад 50 учасників. Пластуни вдосконалили свої навички виживання та командної роботи.</p>
                    <div class="img-container">
                        <img src="achievement1.jpg" alt="Фото з табору 2023">
                    </div>
                </li>
                <li>
                    <h3>Мандрівка Карпатами 2024</h3>
                    <p>Мандрівка на вершини Карпат стала однією з найбільш захоплюючих подій для нашої спільноти.</p>
                    <div class="img-container">
                        <img src="achievement2.jpg" alt="Фото з мандрівки">
                    </div>
                </li>
                <!-- Додай ще досягнення, коли буде потрібно -->
            </ul>
        </div>
        
        <!-- Дописи -->
        <div class="content-section" id="posts">
            <h2>Дописи</h2>
            <p>Ця частина сайту знаходиться в процесі оновлення. Скоро з'являться нові дописи!</p>
        </div>
    </div>
    <footer>
        <p>© 2025 Курінь 117 ім. Івана Чмоли</p>
    </footer>

    <script>
        // Функція для перемикання між секціями
        function showSection(sectionId) {
            // Спочатку сховати всі секції
            var sections = document.querySelectorAll('.content-section');
            sections.forEach(function(section) {
                section.classList.remove('active');
            });
            // Показати обрану секцію
            document.getElementById(sectionId).classList.add('active');
        }

        // За замовчуванням відображати головну секцію
        showSection('home');
    </script>
</body>
</html>
