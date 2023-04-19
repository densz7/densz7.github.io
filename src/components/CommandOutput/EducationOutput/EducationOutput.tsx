import { Fragment } from 'react';

import { Divider } from '../../../shared/ui';

const institutions = [
  {
    name: 'Тюменский индустриальный университет',
    years: '2014-2018',
    speciality: 'Информационные системы и технологии (бакалавриат)',
    educationForm: 'Очная',
  },
  {
    name: 'Тюменский индустриальный университет',
    years: '2018-2020',
    speciality: 'Информационные системы и технологии (магистратура)',
    educationForm: 'Очная',
  },
];

export const EducationOutput = () => {
  return (
    <div>
      {institutions.map((institution, index) => (
        <Fragment key={index}>
          <ul className="mb-[7px]">
            <li className="mb-[7px]">
              <b>Учебное заведение:</b> {institution.name}
            </li>
            <li className="mb-[7px]">
              <b>Период обучения:</b> {institution.years}
            </li>
            <li className="mb-[7px]">
              <b>Специальность:</b> {institution.speciality}
            </li>
            <li>
              <b>Форма обучения:</b> {institution.educationForm}
            </li>
          </ul>
          {index !== institutions.length - 1 && (
            <div className="mb-[7px]">
              <Divider />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};
