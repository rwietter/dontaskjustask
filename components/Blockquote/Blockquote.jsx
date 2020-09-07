import React from 'react';
import { string } from 'prop-types';

import * as S from './styles';

const Blockquote = ({ children, id }) => {
  return (
    <S.Blockquote id={id}>
      <span>
        <p>{children}</p>
      </span>
    </S.Blockquote>
  );
};

Blockquote.propTypes = {
  children: string.isRequired,
  id: string.isRequired,
};

export { Blockquote };
