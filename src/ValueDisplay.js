import React, { useEffect, useRef } from "react"; // Импортируем необходимые хуки

function ValueDisplay({ value }) {
  const prevValue = useRef(""); // Создаем реф для хранения предыдущего значения

  // Используем useEffect для обновления рефа при каждом изменении value
  useEffect(() => {
    prevValue.current = value; // Обновляем текущее значение в рефе
  }, [value]);

  return (
    <div>
      <p>Текущее значение: {value}</p>
      <p>Предыдущее значение: {prevValue.current}</p>
    </div>
  );
}

export default ValueDisplay;
