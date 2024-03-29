import dayjs from 'dayjs/esm/index';

const DATE_BIRTHDAY = '1996-03-19';

const AGE = dayjs().diff(dayjs(DATE_BIRTHDAY), 'y');

export const MeOutput = () => {
  return (
    <div>
      <p className="mb-[10px]">
        Меня зовут <span className="font-medium">Денис Журавлев, мне {AGE} лет.</span>
      </p>
      <p className="mb-[10px]">
        Я являюсь <span className="font-medium">frontend-разработчиком.</span>
      </p>
      <p>
        Проживаю в городе <span className="font-medium">Тюмень.</span>
      </p>
    </div>
  );
};
