import { defineComponent } from 'vue';
import { DIcon } from '../../icon';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  emits: ['click'],
  setup(props, { emit }) {
    const ns = useNamespace('notification');
    return () => (
      <div class={ns.e('icon-close')} onClick={(e) => emit('click', e)}>
        <DIcon name="close" size="14px" />
      </div>
    );
  },
});
