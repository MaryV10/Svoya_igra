
import { CardItem } from '../../entities/card/ui/CardItem';


export const CardList: React.FC = () => {


    const questions = [
        {
            id: 1,
            question: "Какой год был основан Рим?",
            answer: "753 до н. э.",
            category: "История",
            value: 10,
            image: "images/rome.jpg",  // Путь к изображению (замените на реальный путь)
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 2,
            question: "Какая планета самая большая в Солнечной системе?",
            answer: "Юпитер",
            category: "Астрономия",
            value: 20,
            image: "images/jupiter.jpg",  // Путь к изображению (замените на реальный путь)
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 3,
            question: "Как называется столица Японии?",
            answer: "Токио",
            category: "География",
            value: 15,
            image: "images/tokyo.jpg",  // Путь к изображению (замените на реальный путь)
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 4,
            question: "Кто написал произведение 'Гордость и предубеждение'?",
            answer: "Джейн Остин",
            category: "Литература",
            value: 25,
            image: "images/austen.jpg",  // Путь к изображению (замените на реальный путь)
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 5,
            question: "Какая химическая формула воды?",
            answer: "H₂O",
            category: "Химия",
            value: 5,
            image: "images/water.jpg",  // Путь к изображению (замените на реальный путь)
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];
    
    

  return (
    <div>
      
      {questions.map((question) => (
        <CardItem
          key={question.id}
          question={question}
        />
      ))}
    </div>
  );
};
