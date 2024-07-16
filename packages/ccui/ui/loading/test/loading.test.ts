import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { LoadingDirective } from '../index';

test('loading test', () => {
  const wrapper = shallowMount(Loading, {
    props: {}
  });

  it('loading demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
