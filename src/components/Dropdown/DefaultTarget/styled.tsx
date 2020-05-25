import styled from 'styled-components';
import { transitions } from 'polished';

import { styleless } from '../../Styleless';
import { hcStyle } from '../../../modules/themes';

export const Container = styled.div<{ isShowing: boolean }>`
  ${styleless};

  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  border-radius: ${hcStyle.radiusNormal()};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.normal)};
  height: ${hcStyle.huge()};
  padding: 0 ${hcStyle.increased()};
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }
`;
