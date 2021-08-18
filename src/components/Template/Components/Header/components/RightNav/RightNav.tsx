import React from 'react';
import Link from 'next/link';

import { Ul } from './RightNav.styles';

const RightNav = ({ open, setOpen }) => (
  <Ul open={open}>
    <li>
      <Link href="/">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Home
        </a>
      </Link>
    </li>

    <li>
      <Link href="/me/history">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Meus agendametos
        </a>
      </Link>
    </li>

    <li>
      <Link href="/me">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Meu perfil
        </a>
      </Link>
    </li>

    <li>
      <Link href="/login">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Sair
        </a>
      </Link>
    </li>
  </Ul>
);

export default RightNav;
