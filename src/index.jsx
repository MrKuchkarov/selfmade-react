// Чтобы работал JSX, React должен быть в замыкании
import React from "./react";
import Counter from "./counter";
import ReactDOM from "./react-dom";

// Функциональный компонент
const Greeting = ({ name }) => <p>Привет, {name}!</p>;

const foods = [
    'Банановый чизкейк с семенами чиа',
    'Картошка обжаренная на курдюке с луком и котлетой из копченого лосося',
    'Овсяная каша с мёдом, орехами и фруктами'
]

const App = (
    <div>
        <h1 className="primary">
            Да здравствует React!
        </h1>
        <p>Самостоятельная реализация React в 90 строк кода</p>
        <Greeting name={"Самодельный React"} />
        <Counter />
        <h4>Сегодня в меню:</h4>
        <ul>
            {foods.map(food => <li>{food}</li>)}
        </ul>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
