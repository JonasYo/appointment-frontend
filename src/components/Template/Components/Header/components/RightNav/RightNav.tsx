import React from 'react';
import Link from 'next/link';

import { Ul } from './RightNav.styles';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const RightNav = ({ open, setOpen }: Props) => (
  <Ul open={open}>
    <li>
      <Link href="/">
        <p onClick={() => setOpen(!open)} aria-hidden="true">
          Home
        </p>
      </Link>
    </li>

    <li>
      <Link href="/me/history">
        <p onClick={() => setOpen(!open)} aria-hidden="true">
          Meus agendametos
        </p>
      </Link>
    </li>

    <li>
      <Link href="/me">
        <p onClick={() => setOpen(!open)} aria-hidden="true">
          Meu perfil
        </p>
      </Link>
    </li>

    <li>
      <Link href="/login">
        <p onClick={() => setOpen(!open)} aria-hidden="true">
          Sair
        </p>
      </Link>
    </li>
  </Ul>
);

export default RightNav;
