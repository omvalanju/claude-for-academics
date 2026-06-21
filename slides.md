---
theme: seriph
layout: center
routerMode: hash
title: Claude Co-work for Academics
info: |
  ## Claude Co-work for Academics
  Building an Autonomous Research Partner
author: Andy Stapleton
highlighter: shiki
transition: slide-left
aspectRatio: 16/9
canvasWidth: 980
drawings:
  enabled: true
  persist: false
download: true
---

# Claude Co-work for Academics
## Building an Autonomous Research Partner

Adapted from Andy Stapleton's Claude Co-work Guide

<div style="display: flex; justify-content: center; width: 100%;">
  <div style="margin-top: 2.5rem; display: flex; align-items: center; gap: 1.5rem; padding: 1rem; background: #FAF6F1; border-radius: 12px; border: 1px solid #E8E0D8; max-width: 450px;">
    <img src="./aldrin.png" style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%; border: 3px solid #D4714E;" />
    <div style="text-align: left;">
      <h3 style="margin: 0; color: #2D2520; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
        Celebrating Aldrin! 🏳️‍🌈🌈✨
      </h3>
      <p style="margin: 0; font-size: 0.9rem; color: #7A706A; margin-top: 4px;">Happy Pride! Celebrating our gay icon!</p>
    </div>
  </div>
</div>

<!--
[Timing: 0:00 - 1:30]
Good morning, colleagues and fellow researchers. Thank you for joining me today. I want to start with a paradigm shift that is quietly transforming how we conduct academic research.

For the past couple of years, generative AI tools have been treated largely like smart text boxes or high-speed spell checkers. We paste an abstract, we ask for feedback, we receive a response, and we prompt it again. It has been an active, tiring, manual back-and-forth process.

But a fundamental change has arrived with the introduction of Claude Co-work. We are transitioning away from active prompting and stepping into the era of agentic research partners. In today's presentation, we will walk through the foundations of the Claude ecosystem, explore the unique model architecture that powers it, and map out exactly how to set up autonomous background research workflows — from 14-page literature reviews connected to live databases to automatic presentation design.
-->

---
layout: default
---

# The Claude Model Family
## From Lightweight to Elite Reasoning

<div class="grid grid-cols-3 gap-4 mt-2">
  <div class="card p-3">
    <h3 style="font-size:1.1rem; margin-bottom:0.5rem; padding-bottom:0.3rem;">Claude Haiku</h3>
    <p style="font-size:0.8rem; line-height:1.4;">Ultra-fast, cost-efficient. Scanning emails, sorting library documents, classification routing.</p>
  </div>
  <div class="card p-3">
    <h3 style="font-size:1.1rem; margin-bottom:0.5rem; padding-bottom:0.3rem;">Claude Sonnet</h3>
    <p style="font-size:0.8rem; line-height:1.4;">Balanced all-rounder. Frontier-level coding, interactive analysis, daily writing tasks.</p>
  </div>
  <div class="card p-3">
    <h3 style="font-size:1.1rem; margin-bottom:0.5rem; padding-bottom:0.3rem;">Claude Fable</h3>
    <p style="font-size:0.8rem; line-height:1.4;">Narrative generation. Crafting research narratives, grant writing, and communicating complex findings.</p>
  </div>
  <div class="card p-3">
    <h3 style="font-size:1.1rem; margin-bottom:0.5rem; padding-bottom:0.3rem;">Claude Opus</h3>
    <p style="font-size:0.8rem; line-height:1.4;">Elite deep reasoning. Dense PDF analysis, complex scientific synthesis, multi-stage workflows.</p>
  </div>
  <div class="card p-3">
    <h3 style="font-size:1.1rem; margin-bottom:0.5rem; padding-bottom:0.3rem;">Claude Mythos</h3>
    <p style="font-size:0.8rem; line-height:1.4;">Exploratory reasoning. Ideal for interdisciplinary brainstorming and hypothesis generation.</p>
  </div>
</div>

> Co-work leverages **Opus-class** deep cognition to power autonomous multi-agent background execution.

<div style="font-size: 0.5rem; color: #7A706A; margin-top: 1.5rem; font-style: italic;">
* Bai, Y., Jones, A., Chen, A., et al. (2022). "Constitutional AI: Harmlessness from AI Feedback." arXiv preprint arXiv:2212.08073.
</div>

<!--
[Timing: 1:30 - 3:30]
To understand how we make this leap, we must first look under the hood of Anthropic's AI ecosystem. Claude is designed on a framework of Constitutional AI — meaning its outputs are heavily aligned for accuracy, safety, and scientific precision.

But Claude isn't just a single model; it is a family of specialized models. Haiku is the lightweight champion, incredibly fast and cost-efficient. Sonnet is the balanced all-rounder with frontier-level coding abilities. Opus is the elite reasoning engine, built for deep, long-horizon analysis of massive, complex PDFs and conducting scientific synthesis.

Additionally, we have Fable, which excels at narrative generation — particularly useful for grant proposals and communicating complex findings. And Mythos, the cutting-edge creative reasoning model, ideal for interdisciplinary brainstorming and generating novel hypotheses.

It is this multi-layered processing power — particularly Opus — that runs behind the scenes of our Co-work agents, giving us highly reliable, hallucination-resistant academic workflows.
-->

---
layout: default
---

# The Shift: Chat vs. Co-work
## The Agentic Paradigm

<div class="grid grid-cols-2 gap-8 mt-4">

<div>
  
### Traditional Chat
<div class="card mt-4">
  <ul style="margin: 0; padding-left: 1.2rem;">
    <li><strong>Linear ping-pong</strong> — Requires constant prompting.</li>
    <li><strong>Amnesia</strong> — Forgets previous papers or context.</li>
    <li><strong>Isolated</strong> — Cannot run code or access local PDFs.</li>
    <li><strong>Manual</strong> — You must copy-paste everything.</li>
  </ul>
</div>

</div>

<div>

### Claude Co-work
<div class="card mt-4" style="border-color: #D4714E;">
  <ul style="margin: 0; padding-left: 1.2rem;">
    <li><strong>Objective-driven</strong> — Runs autonomously in the background.</li>
    <li><strong>Persistent Memory</strong> — Recalls your entire thesis structure.</li>
    <li><strong>Integrated</strong> — Interacts directly with your file system.</li>
    <li><strong>Agentic</strong> — Executes Python scripts, downloads papers.</li>
  </ul>
</div>

</div>

</div>

> Tasks take 10-15 minutes because the system is running multi-step code execution, searching external databases, and self-correcting.

<!--
[Timing: 3:30 - 6:00]
Now, let's look at how we actually use these models. Think of traditional Chat as a game of ping-pong. You send a prompt, you get a response. If you want to draft a literature review, you have to prompt it step-by-step.

Claude Co-work operates like an executive assistant. You hand it a single complex objective. Claude immediately spins up multiple background agents. One queries external scientific databases, another analyzes the core structure, and a third cross-checks citations for errors.

Crucially, Co-work doesn't just guess when it hits ambiguity; it stops and asks you clarifying questions. You answer once, and the agents resume work in the background. The final product is a vetted academic document, not a superficial chat output.
-->

---
layout: two-cols
---

# Custom "Skills"
## Repeatable Academic Workflows

Standardize your complex prompts as saved, reusable execution files.

- **Saved Skills** — Package multi-step instructions (journal formatting, citation schemas) into single-click triggers
- **Backslash Trigger** — Type `\` in any workspace to list and instantly run your saved skills
- **Skill Creator Meta-Skill** — Capture any successful Claude conversation and save it as a permanent, reusable skill template

> This guarantees execution consistency regardless of underlying model updates.

::right::

<TypewriterChat></TypewriterChat>

<!--
[Timing: 6:00 - 8:30]
Once installed, you can start leveraging the power of Skills.

In standard AI tools, we spend a massive amount of time copy-pasting system prompts. Skills solve this by capturing complex, multi-step prompts and saving them as automated, reusable execution files directly in your sidebar.

To use a skill, you simply type a backslash in the command line. A dropdown menu of your custom skills instantly appears. You click Literature Helper or Abstract Writer, drop in your raw data, and the model executes the exact same rigorous methodology every single time.

If you don't want to program these skills from scratch, you can use the built-in Skill Creator meta-skill. When you have a highly successful session with Claude, you can simply command: Capture what we just did and turn it into a skill.
-->

---
layout: default
---

# Connecting to Science: MCP Connectors
## Live Academic Database Integration

The **Model Context Protocol (MCP)** lets Claude directly query live external databases — resolving the hallucination problem at its root.

<div class="grid-cards" style="margin-top: 1rem; margin-bottom: 1.5rem;">
  <div class="card" style="border-left: 4px solid #D4714E;">
    <h3 style="border-bottom: none; margin-bottom: 0.2rem !important;">Consensus</h3>
    <p>Queries 200M+ peer-reviewed papers. Returns real abstracts, DOIs, and hyperlinked citations.</p>
  </div>
  <div class="card" style="border-left: 4px solid #E0A03C;">
    <h3 style="border-bottom: none; margin-bottom: 0.2rem !important;">PubMed & bioRxiv</h3>
    <p>Direct integration with clinical studies, biology research, and preprints.</p>
  </div>
  <div class="card" style="border-left: 4px solid #48A56A;">
    <h3 style="border-bottom: none; margin-bottom: 0.2rem !important;">PubChem</h3>
    <p>Retrieves accurate chemical structures, compound profiles, and safety data.</p>
  </div>
  <div class="card" style="border-left: 4px solid #5C6BC0;">
    <h3 style="border-bottom: none; margin-bottom: 0.2rem !important;">Bio Render</h3>
    <p>Interfaces with scientific illustration tools for schematic diagrams.</p>
  </div>
</div>

> Zero copy-pasting. Abstracts, metrics, and citation hyperlinks are pulled natively into the AI environment.

<div style="font-size: 0.5rem; color: #7A706A; margin-top: 1.5rem; font-style: italic; line-height: 1.3;">
* Model Context Protocol (MCP) introduced by Anthropic (Nov 2024). <br/>
* Consensus database comprises >220 million peer-reviewed papers via Semantic Scholar & OpenAlex (2026).
</div>

<!--
[Timing: 8:30 - 11:00]
Now let's talk about scientific accuracy. Historically, one of the greatest dangers of using generative AI for science has been information isolation. Traditional models cannot search live research databases.

Claude Co-work resolves this using the Model Context Protocol, or MCP. MCP is an open standard that allows the local desktop app to establish direct Connectors to specialized external web services.

This includes direct integration with PubMed, bioRxiv, PubChem, and Consensus — an AI-powered academic search engine indexing over 200 million peer-reviewed papers. You simply instruct Claude to search Consensus and PubMed for you. It queries the live scientific databases, pulls the actual peer-reviewed files, extracts the data, and writes your summary using real, hyperlinked research.
-->

---
layout: two-cols
---

# Projects & Schedules
## Automation Workflows

### Project Sandboxes
- Upload style sheets, grant requirements, or journal layouts
- Toggle **Memory** to carry over context, definitions, and experimental data across chats
- Set project-level instructions like "Always write in IEEE format"

### Recurring Schedules
- Automate repetitive literature searches on a weekly basis
- Schedule tasks like "Every Monday at 9 AM, query Consensus for new OPV papers and compile a summary report"
- Enable **Keep computer awake** for weekend background jobs

::right::

<FlowChart :nodes="[
  { label: 'Monday 9:00 AM', type: 'node-start' },
  { label: 'Query Consensus', type: 'node-process' },
  { label: 'Filter by Impact', type: 'node-process' },
  { label: 'Summarize Findings', type: 'node-process' },
  { label: 'Save to Project Memory', type: 'node-end' }
]" direction="col" />

<!--
[Timing: 11:00 - 13:00]
To keep your academic research highly organized, Co-work introduces two structural elements: Projects and Schedules.

Projects are dedicated sandboxes for specific grants, research papers, or thesis chapters. With the Memory feature toggled on, Claude retains key parameters across multiple chats, maintaining consistent progress.

Schedules introduce true research automation. You can set up a task that says: Every Monday morning at 9 AM, query Consensus for new publications on indoor organic photovoltaic efficiency. Compile a summary, highlight new records, and draft a progress report.

The desktop app must be open and your computer must be awake. The settings panel contains a Keep computer awake toggle for this purpose.
-->

---
layout: default
---

# Deep Dive: The 14-Page Literature Review

<InteractiveAcademic></InteractiveAcademic>

<!--
[Timing: 13:00 - 15:00]
Let's look at a real-world case study. The prompt was straightforward: Create an academic literature review about OPV devices and their indoor use. Focus on recent literature and seminal papers.

Because the Consensus connector was active and a Literature Helper skill was loaded, Claude initiated a background research workflow, searched live databases, filtered for high-impact papers, and stopped to ask clarifying questions about specific sub-chemistries.

The final output was a comprehensive, highly technical 14-page literature review with detailed sections breaking down donor-acceptor ratios, active layer thicknesses, and indoor light absorption profiles. Every scientific claim was backed by a real, hyperlinked citation.
-->

---
layout: two-cols
---

# Deep Dive: PDF-to-Slides
## Multi-Agent Presentation Pipeline

Convert dense scientific papers into formatted presentation structures.

- **Extraction** — Distills core arguments, methods, and data from source PDFs
- **Script Drafting** — Generates spoken scripts calibrated to target duration
- **Layout Compilation** — Runs local code execution to build slide templates
- **Visual Auditing** — Screenshot-based feedback loop detects and corrects overlapping text or layout issues

::right::

<FlowChart :nodes="[
  { label: 'Upload Source PDF', type: 'node-start' },
  { label: 'Extract Methods & Data', type: 'node-process' },
  { label: 'Draft Presentation Script', type: 'node-process' },
  { label: 'Compile Code for Layout', type: 'node-process' },
  { label: 'Visual Audit (Screenshot)', type: 'node-warning' },
  { label: 'Save Approved Output', type: 'node-end' }
]" direction="col" />

<!--
[Timing: 15:00 - 17:00]
Our second case study covers transforming a dense, complex research paper into a presentation for a group meeting.

A user uploaded a dense PDF covering carbon nanotube and silver nanowire hybrid transparent electrodes. The prompt was simple: Turn this into a 10-minute presentation for my group meeting.

Claude Co-work launched a multi-agent coding pipeline: it extracted core findings, wrote a presentation script, ran local code execution to design slide layouts, and then used its visual verification agent to inspect the slides and auto-correct overlapping text.

The output was saved directly to a local folder — structured bullet points, methodology breakdowns, and regions indicating where to paste relevant images from the paper.
-->

---
layout: default
---

# Settings for Agent Autonomy
## Enable These in File → Settings → Capabilities

To unlock Claude Co-work's full academic potential, toggle these settings **ON** in the desktop app:

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="card p-4 bg-white" style="border: 2px solid #E8E0D8;">
  <h3 style="font-size:0.9rem; border-bottom:1px solid #E8E0D8; padding-bottom:0.3rem; margin-top:0;">Capabilities</h3>
  <ul style="list-style-type: none; padding-left: 0; margin-top: 0.6rem; margin-bottom: 0;">
    <li style="margin-bottom: 0.6rem !important; display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>History Memory</strong> — Learns research styles & preferences.</div>
    </li>
    <li style="margin-bottom: 0.6rem !important; display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>Tool Access</strong> — Grants local read/write file permissions.</div>
    </li>
    <li style="margin-bottom: 0.6rem !important; display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>Agent Vision</strong> — Screenshot validation for auto-correction.</div>
    </li>
    <li style="margin-bottom: 0.6rem !important; display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>Code Execution</strong> — Run R/Python statistical scripts locally.</div>
    </li>
    <li style="display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>Keep Awake</strong> — Essential for background weekend runs.</div>
    </li>
  </ul>
</div>

<div class="card p-4 bg-white" style="border: 2px solid #E8E0D8;">
  <h3 style="font-size:0.9rem; border-bottom:1px solid #E8E0D8; padding-bottom:0.3rem; margin-top:0;">Safeguards</h3>
  <ul style="list-style-type: none; padding-left: 0; margin-top: 0.6rem; margin-bottom: 0;">
    <li style="margin-bottom: 0.6rem !important; display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>Require Approval</strong> — Pauses before paying API costs.</div>
    </li>
    <li style="margin-bottom: 0.6rem !important; display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>File Restrictions</strong> — Limit access to specific directories.</div>
    </li>
    <li style="margin-bottom: 0.6rem !important; display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>Budget Limits</strong> — Hard caps on token usage per session.</div>
    </li>
    <li style="display: flex; align-items: flex-start; gap: 8px;">
      <span style="color: #48A56A; font-weight: bold;">✓</span>
      <div><strong>Review Logs</strong> — Inspect every bash command and script.</div>
    </li>
  </ul>
</div>

</div>

<!--
[Timing: 17:00 - 18:00]
Let's look at the settings you need to enable. When you first download the native desktop application, many of these advanced features are disabled by default.

To maximize Claude Co-work's capabilities, click File, open Settings, and head to the Capabilities tab.

Toggle on: Chat History Memory, Tool Access, Visuals, Code Execution, and Keep Computer Awake.

Configuring these settings guarantees your desktop agent has all the permissions it needs to complete its background cycles without interruption.
-->

---
layout: default
---

# Ethical Boundaries
## Ownership & Academic Integrity

Claude is a tool, not an author. Maintain clear ethical boundaries.

- **Human Agency** — You are fully responsible for thesis content. Claude assists, but critical thinking must be yours.
- **Plagiarism vs. Editing** — Use Claude to improve phrasing, check grammar, or translate. Do not let it write original arguments unsupervised.
- **Citation Verification** — Claude can hallucinate references. Always verify every citation against Google Scholar, Scopus, or the original database.

<br/>
<FlowChart :nodes="[
  { label: 'Human: Creates Concept & Outline', type: 'node-start' },
  { label: 'Claude: Co-writes Initial Draft', type: 'node-process' },
  { label: 'Human: Reviews & Critiques', type: 'node-start' },
  { label: 'Claude: Refines & Formats', type: 'node-process' },
  { label: 'Human: Verifies & Submits', type: 'node-end' }
]" direction="row" />

<!--
[Timing: 18:00 - 19:30]
Claude is a tool, not an author. The thesis must reflect your critical thinking. Use Claude to improve your phrasing, check grammar, or translate. Do not let it write original arguments.

Most importantly, Claude can hallucinate academic papers. Always verify citation references before citing them. The Mermaid diagram on screen shows the correct human-in-the-loop workflow: you create the concept, Claude co-writes, you review and critique, Claude refines, and you verify and submit.
-->

---
layout: end
---

# Thank You
## Questions & Discussion

Let the AI handle the operational logistics, so you can focus on the science.

<!--
[Timing: 19:30 - 20:00]
In conclusion, the era of interacting with AI as a simple text box is ending. By leveraging Anthropic's powerful model family — using Opus for deep cognitive synthesis — and setting up the desktop app with database connectors and automated skills, you can construct a highly capable, autonomous digital research partner.

Thank you so much for your time. I would now like to open up the floor to any questions you may have about setting up these agentic workflows for your own research projects.
-->
