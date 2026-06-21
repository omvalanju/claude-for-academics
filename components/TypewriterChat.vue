<template>
  <div class="cowork-ui">
    <!-- NEW CHAT VIEW -->
    <div v-if="phase < 3" class="new-chat-view">
      <div class="cowork-greeting-container">
        <div class="cowork-greeting">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="starburst">
            <path d="M12 2V6M12 18V22M6 12H2M22 12H18M4.92893 4.92893L7.75736 7.75736M16.2426 16.2426L19.0711 19.0711M4.92893 19.0711L7.75736 16.2426M16.2426 7.75736L19.0711 4.92893" stroke="#D4714E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="cowork-greeting-title">Let's knock something off your list</div>
        </div>
      </div>

      <div class="cowork-input-wrapper">
        <div class="cowork-input-box">
          <div class="input-main-area">
            <span class="placeholder-text" v-if="phase === 0">How can I help you today?</span>
            <span class="typing-text" v-if="phase >= 1">
              <span class="backslash" v-if="phase >= 1">\</span
              ><span class="command-text" v-if="phase >= 1">{{ typedCommand }}</span
              ><span class="prompt-text" v-if="phase >= 1">{{ typedPrompt }}</span
              ><span class="cursor" v-if="phase >= 1 && phase < 3">|</span>
            </span>
          </div>
          <div class="input-footer-area">
            <div class="input-icon-btn plus-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
            <div class="input-icon-btn submit-btn" :class="{ 'active': phase > 0 }">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </div>
          </div>
        </div>
        <div class="cowork-pills">
          <div class="pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span>Work in a project</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="pill">
            <span>Ask</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="model-pill">
            <span>Sonnet 4.6</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
      </div>
    </div>

    <!-- ACTIVE CHAT VIEW -->
    <div v-if="phase >= 3" class="active-chat-view">
      <div class="chat-history">
        <!-- User Message -->
        <div class="chat-msg user-msg">
          <div class="msg-bubble user-bubble">
            <span class="backslash">\</span><span class="command-text">lit-review</span><span class="prompt-text"> analyze these files</span>
          </div>
        </div>

        <!-- Skill Invocation -->
        <div class="chat-msg system-msg" v-if="phase >= 4">
          <div class="skill-indicator">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4714E" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <span>Invoking Skill: Literature Review...</span>
          </div>
        </div>

        <!-- Claude Response -->
        <div class="chat-msg claude-msg" v-if="phase >= 5">
          <div class="claude-avatar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V6M12 18V22M6 12H2M22 12H18M4.92893 4.92893L7.75736 7.75736M16.2426 16.2426L19.0711 19.0711M4.92893 19.0711L7.75736 16.2426M16.2426 7.75736L19.0711 4.92893" stroke="#D4714E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="msg-bubble claude-bubble">
            Analysis complete. I've extracted the methodologies and findings from the provided PDFs and generated a markdown comparison matrix.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phase = ref(0)
const typedCommand = ref('')
const typedPrompt = ref('')

const command = 'lit-review'
const prompt = ' analyze these files'

function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

async function loop() {
  while (true) {
    phase.value = 0
    typedCommand.value = ''
    typedPrompt.value = ''
    await delay(1500)

    // Type command
    phase.value = 1
    for (const ch of command) {
      typedCommand.value += ch
      await delay(80)
    }
    
    // Type prompt
    for (const ch of prompt) {
      typedPrompt.value += ch
      await delay(50)
    }
    
    // Pause before submit
    phase.value = 2
    await delay(600)
    
    // Transition to chat
    phase.value = 3
    await delay(800)

    // Show skill invocation
    phase.value = 4
    await delay(1800)

    // Show Claude response
    phase.value = 5
    await delay(5000)
  }
}

onMounted(loop)
</script>

<style scoped>
.cowork-ui {
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 280px; /* Fixed height to prevent layout jumps */
}

/* NEW CHAT VIEW STYLES */
.new-chat-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cowork-greeting-container {
  text-align: left;
  width: 100%;
  max-width: 440px;
  margin-bottom: 1.5rem;
}

.cowork-greeting {
  display: flex;
  align-items: center;
  gap: 12px;
}

.starburst {
  flex-shrink: 0;
}

.cowork-greeting-title {
  font-size: 1.3rem !important;
  font-weight: 600 !important;
  color: #2D2520 !important;
  text-transform: none !important;
  letter-spacing: -0.02em !important;
  margin: 0;
  border: none;
  font-family: 'Newsreader', 'Georgia', serif !important;
}

.cowork-input-wrapper {
  width: 100%;
  max-width: 440px;
}

.cowork-input-box {
  background: #FFFFFF;
  border: 1px solid #E8E0D8;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 120px;
}

.input-main-area {
  flex-grow: 1;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #2D2520;
  margin-bottom: 1rem;
}

.placeholder-text {
  color: #AAA098;
}

.backslash {
  color: #D4714E;
  font-weight: 500;
  background: #FEF3EC;
  padding: 0 4px;
  border-radius: 4px;
  margin-right: 2px;
}

.command-text {
  color: #2D2520;
}

.prompt-text {
  color: #2D2520;
}

.cursor {
  color: #D4714E;
  animation: blink 0.8s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.input-footer-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-icon-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7A706A;
  background: #FAF6F1;
  border: 1px solid #E8E0D8;
}

.submit-btn {
  background: #F5F0EA;
  color: #AAA098;
}

.submit-btn.active {
  background: #D4714E;
  color: #FFFFFF;
  border-color: #D4714E;
}

.cowork-pills {
  display: flex;
  gap: 8px;
  margin-top: 1rem;
}

.pill, .model-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #FFFFFF;
  border: 1px solid #E8E0D8;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #5C5550;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.model-pill {
  margin-left: auto;
}

/* ACTIVE CHAT VIEW STYLES */
.active-chat-view {
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}

.chat-history {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chat-msg {
  display: flex;
  width: 100%;
}

.user-msg {
  justify-content: flex-end;
}

.system-msg {
  justify-content: flex-start;
  padding-left: 36px;
}

.claude-msg {
  justify-content: flex-start;
  gap: 12px;
}

.msg-bubble {
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.85rem;
  line-height: 1.5;
  max-width: 85%;
}

.user-bubble {
  background: #FAF6F1;
  border: 1px solid #E8E0D8;
  color: #2D2520;
  border-bottom-right-radius: 4px;
}

.skill-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  color: #7A706A;
  background: #FEF3EC;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #F0D5C3;
}

.claude-avatar {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #FAF6F1;
  border: 1px solid #E8E0D8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 4px;
}

.claude-bubble {
  background: #FFFFFF;
  border: 1px solid #E8E0D8;
  color: #2D2520;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  border-top-left-radius: 4px;
}
</style>
