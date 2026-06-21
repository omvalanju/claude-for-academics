<template>
  <footer
    v-if="$nav.currentLayout !== 'cover' && $nav.currentLayout !== 'end'"
    style="position: absolute; bottom: 0; left: 0; right: 0; width: 100%; z-index: 50;"
  >
    <!-- Progress Bar -->
    <div style="width: 100%; height: 4px; background-color: #E8E0D8;">
      <div
        :style="{ width: (($nav.currentPage / $nav.total) * 100) + '%', backgroundColor: '#D4714E', height: '100%', transition: 'width 0.3s ease' }"
      ></div>
    </div>
    
    <!-- Footer Text & Page Numbers -->
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 32px; background-color: #FAF6F1;">
      <span style="font-size:0.6rem; color:#D4714E; font-family:'Inter',sans-serif; font-weight:600; letter-spacing:0.05em;">
        CLAUDE CO-WORK FOR ACADEMICS
      </span>
      <span style="font-size:0.75rem; color:#7A706A; font-family:'Inter',sans-serif; font-weight: 600;">
        {{ $nav.currentPage }} / {{ $nav.total }}
      </span>
    </div>
  </footer>
</template>
