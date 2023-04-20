const technologies = ['React v18', 'TypeScript', 'Zustand', 'Tailwind', 'ESLint', 'Prettier'];

const features = [
  'Просмотр истории команд',
  'Очистка истории команд',
  'Автоматическое завершение команд по нажатию на клавишу `Tab`',
  'Переход по истории вперёд/назад через клавиши `UpArrow`/`DownArrow`',
];

export const AboutOutput = () => {
  return (
    <div>
      <p>Данный проект разработан с использованием следующих технологий:</p>
      <ul>
        {technologies.map((technology, index) => (
          <li
            key={index}
            className="mt-[7px]"
          >
            - {technology}
          </li>
        ))}
      </ul>
      <p className="mt-[20px]">
        Особенности данного проекта:{' '}
        <ul>
          {features.map((technology, index) => (
            <li
              key={index}
              className="mt-[7px]"
            >
              - {technology}
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};
