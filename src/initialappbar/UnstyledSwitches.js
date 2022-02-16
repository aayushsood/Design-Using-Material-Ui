import * as React from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

const blue = {
  500: '#007FFF',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
};

const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 58px;
  height: 32px;
  margin-top: 5px;
  cursor: pointer;
  margin-right:0.5rem;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #fff;
    border-radius: 17px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    border: 2px solid #eeeaea;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 25px;
    height: 25px;
    top: 5px;
    left: 5px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
    background-color:#1976D2;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 31px;
      top: 5px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #252424;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

export default function UnstyledSwitches() {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

  return (
    <div>
      <SwitchUnstyled
      
      component={Root} {...label} />
    </div>
  );
}
