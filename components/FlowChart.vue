<template>
  <div :class="['flow-chart', direction]">
    <div v-for="(node, i) in nodes" :key="i" class="flow-node-wrapper">
      <div class="flow-node" :class="node.type">
        {{ node.label }}
      </div>
      <div v-if="i < nodes.length - 1" class="flow-arrow">
        ↓
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nodes: { type: Array, required: true },
  direction: { type: String, default: 'col' } // 'col' or 'row'
})
</script>

<style scoped>
.flow-chart {
  display: flex;
  align-items: center;
  gap: 8px;
}
.flow-chart.col {
  flex-direction: column;
}
.flow-chart.row {
  flex-direction: row;
}
.flow-node-wrapper {
  display: flex;
  align-items: center;
}
.flow-chart.col .flow-node-wrapper {
  flex-direction: column;
  gap: 8px;
}
.flow-chart.row .flow-node-wrapper {
  flex-direction: row;
  gap: 12px;
}
.flow-chart.row .flow-arrow {
  transform: rotate(-90deg);
}
.flow-node {
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  font-family: 'Inter', sans-serif;
  color: white;
  min-width: 140px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.flow-arrow {
  color: #7A706A;
  font-weight: bold;
  font-size: 1.2rem;
}
/* Colors */
.node-start { background: #D4714E; border: 1px solid #9A3412; }
.node-process { background: #E8E0D8; border: 1px solid #D1C5B9; color: #2D2520; }
.node-warning { background: #E0A03C; border: 1px solid #92400E; }
.node-end { background: #48A56A; border: 1px solid #2D6A4F; }
</style>
