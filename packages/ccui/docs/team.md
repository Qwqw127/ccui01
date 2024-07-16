---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      参与者
    </template>
    <template #lead>
      参与者列表
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
