  export const test = {
      id: 1,
      name: "Frontend-разработка",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      category: "Программирование",
      cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      trueResult: 10,
      questions: [
         {
            title: "Что такое замыкания в JavaScript?",
            answers: [
               {title: "Возможность обратиться к переменной до её объявления", score: 1},
               {title: "Механизм работы цикла событий", score: 2},
               {title: "Способность функции запоминать окружение в котором она объявлена", score: 5},
            ],
         },
         {
            title: "React - это...",
            answers: [
               {title: "Фреймворк", score: 1},
               {title: "Библиотека", score: 5},
               {title: "Язык программирования", score: 0},
            ],
         },
         {
            title: "Хук useState в React.js - это...",
            answers: [
               {title: "Хук для создания состояния", score: 4},
               {title: "Хук для создания ref", score: 2},
            ],
         },
         {
            title: "Какое правильное написание атрибута класса в JSX?",
            answers: [
               {title: "class", score: 0},
               {title: "class_name", score: 2},
               {title: "className", score: 4},
            ],
         }
      ]
   }