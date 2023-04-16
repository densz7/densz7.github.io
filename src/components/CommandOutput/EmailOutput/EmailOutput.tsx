import { Link } from '../../../shared/ui';

const EMAIL = 'derk_sin@mail.ru';

export const EmailOutput = () => {
  return <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>;
};
