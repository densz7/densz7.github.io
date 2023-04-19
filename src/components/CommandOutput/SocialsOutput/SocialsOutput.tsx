import { Link } from '../../../shared/ui';

const socials = [
  { text: 'Telegram', href: 'https://t.me/densz7' },
  { text: 'VK', href: 'https://vk.com/id115249565' },
];

export const SocialsOutput = () => {
  return (
    <div>
      <p className="mb-[7px]">Мои социальные сети:</p>
      <ul>
        {socials.map((social, index) => (
          <li
            key={index}
            className="mb-[7px] last:mb-0"
          >
            -{' '}
            <Link
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
