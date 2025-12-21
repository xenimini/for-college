let students = [
    "Анна",
    "Борис", 
    "Виктория",
    "Григорий",
    "Дарья"
];
let shuffledStudents = [];

// Единый метод setup() заменяет start() и next()
function setup() {
    // Если массив перемешанных студентов пуст или все выбраны, перемешиваем заново
    if (shuffledStudents.length === 0) {
        // Создаем копию оригинального массива
        shuffledStudents = [...students];
        
        // Перемешиваем массив (алгоритм Фишера-Йетса)
        for (let i = shuffledStudents.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledStudents[i], shuffledStudents[j]] = [shuffledStudents[j], shuffledStudents[i]];
        }
    }
    
    // Извлекаем следующего студента
    const student = shuffledStudents.shift();
    document.getElementById('result').textContent = `Выбран: ${student}`;
}