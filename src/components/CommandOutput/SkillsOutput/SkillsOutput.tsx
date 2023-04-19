export const SkillsOutput = () => {
  return (
    <div>
      <p className="mb-[7px]">В своей работе я использую следующий стек технологий:</p>
      <ul>
        {[
          'HTML5',
          'CSS3 (в т.ч. SASS, SCSS)',
          'JavaScript (в т.ч. ES6, TypeScript)',
          'ReactJS (в т.ч. NextJS, а также CSS Modules, CSS-in-JS)',
          'NPM (а также Yarn)',
          'Webpack (а также Vite)',
          'Web3.js (MetaMask, WalletConnect)',
        ].map((item, index) => (
          <li
            key={index}
            className="mb-[7px]"
          >
            - {item}
          </li>
        ))}
      </ul>
      <p className="mt-[20px] mb-[7px]">
        А также активно пользуюсь следующими популярными библиотеками:
      </p>
      <ul>
        {[
          'MUI (для создания таких компонетов как тултипы, модальные окна, дропдауны и других)',
          'clsx (для удобной работы с CSS классами в JSX разметке)',
          'dayjs (как альтернатива moment.js для удобной работы с датами)',
          'Formik (для работы с формами)',
          'Yup (для валидации форм)',
          'Swiper (для создания различных слайдеров)',
          'Zustand, Redux Toolkit (в качестве глобального стейт-менеджера)',
          'Styled-components, Emotion (для стилизации компонентов методом CSS-in-JS)',
          'Axios (для работы с HTTP-запросами)',
          'socket-io.client (для работы с веб-сокетами)',
          'SWR (в качестве глобального кеш-менеджера для более удобной работы с HTTP-запросами в React.js/Next.js)',
          'Prettier, ESlint (для поддержания единого стиля кода и его чистоты)',
        ].map((item, index) => (
          <li
            key={index}
            className="mb-[7px]"
          >
            - {item}
          </li>
        ))}
        <span>и другие</span>
      </ul>
    </div>
  );
};
