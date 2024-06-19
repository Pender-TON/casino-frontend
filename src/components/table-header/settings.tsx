import { Settings } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';

import {
  PrimaryButton,
  type PrimaryButtonProps,
} from '@components/ui/primary-button';

export const SettingsButton = (props: Omit<PrimaryButtonProps, 'children'>) => {
  return (
    <Fragment>
      <PrimaryButton {...props}>
        <Settings className="h-8 w-8" />
      </PrimaryButton>
    </Fragment>
  );
};
