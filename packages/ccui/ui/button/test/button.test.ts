import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Button } from '../index';

test('button test', () => {
  const wrapper = shallowMount(Button, {
    props: {}
  });

  it('button demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
