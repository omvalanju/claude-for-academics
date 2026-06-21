<template>
  <div class="ia-widget">
    <!-- Header -->
    <div class="ia-header">
      <span class="ia-title">Thesis Lifecycle — Claude as Co-worker</span>
      <span class="ia-badge">Interactive</span>
    </div>

    <!-- Phase Tabs -->
    <div class="ia-tabs">
      <button
        v-for="(p, i) in phases"
        :key="i"
        :class="['ia-tab', { active: active === i }]"
        @click="active = i"
      >
        <span class="ia-tab-icon">{{ p.icon }}</span>
        <span class="ia-tab-label">{{ p.short }}</span>
      </button>
    </div>

    <!-- Detail Panel -->
    <div class="ia-detail">
      <div class="ia-detail-left">
        <div class="ia-phase-tag">Phase {{ active + 1 }}: {{ phases[active].name }}</div>
        <div class="ia-challenge">{{ phases[active].challenge }}</div>
        <div class="ia-desc">{{ phases[active].desc }}</div>
        <div class="ia-tags">
          <span v-for="t in phases[active].tags" :key="t" class="ia-skill-tag">#{{ t }}</span>
        </div>
      </div>
      <div class="ia-detail-right">
        <div class="ia-prompt-label">Example Prompt</div>
        <div class="ia-prompt-text">{{ phases[active].prompt }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
const phases = [
  {
    icon: '📚', short: 'Lit Review', name: 'Literature Review',
    challenge: 'Synthesizing across dozens of studies',
    desc: 'Claude summarizes papers, extracts methods, and builds thematic comparison matrices from uploaded PDFs.',
    tags: ['Summarization', 'Thematic Matrix', 'Gap Analysis'],
    prompt: 'Upload 3 PDFs on AI in education. Extract research questions, methods, findings, and gaps. Format as a comparison table.'
  },
  {
    icon: '🧪', short: 'Methodology', name: 'Research Design',
    challenge: 'Refining methods and justifications',
    desc: 'Claude helps design surveys, critique interview questions for bias, and write epistemological justifications.',
    tags: ['Survey Design', 'Ethics Prep', 'Method Justification'],
    prompt: 'Act as a reviewer. Critique these survey questions for leading bias. Suggest 2 qualitative follow-up questions.'
  },
  {
    icon: '📊', short: 'Analysis', name: 'Data Analysis',
    challenge: 'Writing and debugging statistical scripts',
    desc: 'Generates R/Python code for regressions, t-tests, and visualizations with documented assumption checks.',
    tags: ['R/Python', 'Statistics', 'Data Cleaning'],
    prompt: 'Write R code for a paired t-test with normality checks and a ggplot boxplot. Explain p-value interpretation.'
  },
  {
    icon: '✍️', short: 'Drafting', name: 'Argumentation',
    challenge: 'Structuring chapters and enhancing prose',
    desc: 'Co-writes outlines, expands bullet points into paragraphs, checks argument flow and logical transitions.',
    tags: ['Chapter Structure', 'Draft Expansion', 'Argument Flow'],
    prompt: 'Expand these bullet points into 3 cohesive paragraphs for my Discussion chapter. Use an objective, academic tone.'
  },
  {
    icon: '✨', short: 'Polishing', name: 'Academic Tone',
    challenge: 'Editing, voice tuning, and citation formatting',
    desc: 'Transforms informal notes into formal prose: passive/active balance, vocabulary precision, APA formatting.',
    tags: ['Editing', 'APA/MLA', 'Abstract Writing'],
    prompt: 'Edit this paragraph for academic tone. Remove first-person pronouns. Replace informal phrases with precise vocabulary.'
  }
]
</script>

<style scoped>
.ia-widget {
  border: 1px solid #E8E0D8;
  border-radius: 12px;
  overflow: hidden;
  background: #FFFFFF;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 2px 12px rgba(32,26,22,0.06);
}
.ia-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: #F5F0EA;
  border-bottom: 1px solid #E8E0D8;
}
.ia-title {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 0.85rem;
  color: #2D2520;
}
.ia-badge {
  font-size: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #D4714E;
  background: rgba(212,113,78,0.1);
  padding: 2px 8px;
  border-radius: 4px;
}
.ia-tabs {
  display: flex;
  border-bottom: 1px solid #E8E0D8;
}
.ia-tab {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}
.ia-tab:hover { background: #FAF6F1; }
.ia-tab.active {
  background: #FEF3EC;
  border-bottom-color: #D4714E;
}
.ia-tab-icon { font-size: 1rem; }
.ia-tab-label { font-size: 0.5rem; font-weight: 600; color: #7A706A; letter-spacing: 0.03em; }
.ia-tab.active .ia-tab-label { color: #D4714E; }

.ia-detail {
  display: flex;
  gap: 16px;
  padding: 14px 16px;
  min-height: 120px;
}
.ia-detail-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.ia-detail-right {
  flex: 1;
  background: #1A1512;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ia-phase-tag {
  font-size: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #D4714E;
}
.ia-challenge {
  font-family: 'Instrument Serif', serif;
  font-size: 0.8rem;
  color: #2D2520;
}
.ia-desc {
  font-size: 0.6rem;
  color: #7A706A;
  line-height: 1.5;
}
.ia-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: auto;
  padding-top: 6px;
}
.ia-skill-tag {
  font-size: 0.48rem;
  padding: 1px 6px;
  border-radius: 3px;
  background: #F5F0EA;
  color: #7A706A;
  font-weight: 500;
}
.ia-prompt-label {
  font-size: 0.48rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #D4714E;
}
.ia-prompt-text {
  font-size: 0.58rem;
  font-family: 'JetBrains Mono', monospace;
  color: #C8BFB7;
  line-height: 1.55;
}
</style>
