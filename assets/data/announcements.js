/*
 * Microsoft Ignite 2026 announcements database
 * Source: Ignite 2026.docx
 *
 * This file is shared by:
 * - index.html
 * - announcements.html
 *
 * IMPORTANT:
 * Filtering and counters must use solutionId, not solution.
 */

const announcements = [
    {
        id: "copilot-home",
        title: "Copilot Home: one starting point for Chat and Cowork, powered by Auto",
        solutionId: "copilot",
        solution: "Microsoft Copilot",
        logo: "copilot.png",
        status: "General Availability",
        category: "User Experience",
        summary: "Copilot Home becomes the central entry point for recent activity, suggestions, Chat and Cowork.",
        detail: "From a single composer powered by Auto, users can ask a quick question in Chat or delegate a multi-step workflow to Cowork. Auto selects the appropriate models and effort level and may recommend Cowork for more complex work."
    },
    {
        id: "office-in-copilot",
        title: "Office in Copilot: create and co-author Word, Excel and PowerPoint files inside the Copilot app",
        solutionId: "m365",
        solution: "Microsoft 365",
        logo: "microsoft365.svg",
        status: "General Availability",
        category: "User Experience",
        summary: "Users can create and co-author Word, Excel and PowerPoint files directly inside the Copilot app.",
        detail: "Files inherit Microsoft 365 permissions, sensitivity labels and compliance controls from the start. Creating a PowerPoint presentation or Excel spreadsheet does not consume metered usage because the capability is included in the Copilot subscription."
    },
    {
        id: "copilot-workspaces",
        title: "Copilot Workspaces: a shared space where people and agents work as a team",
        solutionId: "copilot",
        solution: "Microsoft Copilot",
        logo: "copilot.png",
        status: "Frontier",
        category: "User Experience",
        summary: "Copilot Workspaces provides a collaborative environment where employees, colleagues and agents work with shared context.",
        detail: "An agent can draft part of a deliverable and notify a person when human review is needed. Copilot Workspaces is presented as the successor to Copilot Notebooks, with existing notebooks carrying over."
    },
    {
        id: "autopilot",
        title: "Autopilot: an always-on personal agent that keeps your work moving",
        solutionId: "copilot",
        solution: "Microsoft Copilot",
        logo: "copilot.png",
        status: "Frontier",
        category: "User Experience",
        summary: "Autopilot is a long-running autonomous agent with its own identity, memory, tools and named manager.",
        detail: "Autopilot appears in Teams, Outlook, chats and documents and can be mentioned like a colleague. It can handle recurring tasks and advance projects without requiring a prompt at every step. IT administrators can restrict or block it."
    },
    {
        id: "copilot-code",
        title: "Copilot Code: build dashboards, trackers and apps in natural language",
        solutionId: "copilot",
        solution: "Microsoft Copilot",
        logo: "copilot.png",
        status: "Frontier",
        category: "User Experience",
        summary: "Copilot Code lets users build dashboards, trackers and applications by describing them in natural language.",
        detail: "The capability combines natural-language application creation with enterprise security and governance. General availability was announced for the weeks following Ignite 2026."
    },
    {
        id: "work-iq",
        title: "Work IQ: the intelligence layer that gives Copilot and agents context and memory",
        solutionId: "microsoft-iq",
        solution: "Microsoft IQ",
        logo: "microsoft365.svg",
        status: "General Availability",
        category: "User Experience",
        summary: "Work IQ grounds Copilot and custom agents in organizational information while respecting existing permissions.",
        detail: "Work IQ uses emails, meetings, chats, files and business data to identify relevant context. Permission-aware retrieval, real-time meeting context and long-running tasks are generally available. Memory is in public preview, while CRM and ERP context through Business Applications is in preview."
    },
    {
        id: "work-iq-listen",
        title: "Work IQ Listen: agents that react to events instead of waiting for a prompt",
        solutionId: "microsoft-iq",
        solution: "Microsoft IQ",
        logo: "microsoft365.svg",
        status: "Public Preview",
        category: "User Experience",
        summary: "Work IQ Listen allows agents to respond when relevant messages or business events occur.",
        detail: "Agents can react without waiting for a user prompt or repeatedly polling for changes. WorkIQ.Read and WorkIQ.Act separate knowledge access from authorization to act. Administrators can permit read, create and update operations while blocking deletion or requiring human approval."
    },
    {
        id: "dynamics-365-in-copilot",
        title: "Dynamics 365 in Copilot: Sales and ERP plugins bring business actions into Copilot",
        solutionId: "dynamics365",
        solution: "Dynamics 365",
        logo: "dynamics365.svg",
        status: "General Availability",
        category: "User Experience",
        summary: "Dynamics 365 Sales and ERP plugins introduce business information and actions directly into Copilot.",
        detail: "The Sales plugin assists with account plans, customer meeting preparation, deal tracking and PowerPoint creation. The ERP apps plugin adds more than 39 finance and operations skills and connects with Excel."
    },
    {
        id: "salesforce-in-copilot",
        title: "Salesforce in Copilot: Salesforce context and sales skills inside Copilot",
        solutionId: "business-applications",
        solution: "Business Applications",
        logo: "dynamics365.svg",
        status: "Public Preview",
        category: "User Experience",
        summary: "CopilotForce brings Salesforce context and prebuilt sales skills into Microsoft Copilot.",
        detail: "The plugin was developed with Salesforce and includes more than 38 prebuilt sales skills. Additional Salesforce integrations were announced for Microsoft Teams and Microsoft Fabric."
    },
    {
        id: "agent-365",
        title: "Agent 365: the control plane to observe, govern and secure every AI agent",
        solutionId: "agent365",
        solution: "Agent 365",
        logo: "agent365.webp",
        status: "General Availability",
        category: "Admin Experience",
        summary: "Agent 365 provides a central registry and governance platform for Microsoft and third-party AI agents.",
        detail: "Agent 365 provides ownership, policy templates, lifecycle controls and dynamic agent risk scoring. It also supports multi-tenant management, plugin and skill governance, MCP server governance and supervision of agents from multiple third-party platforms."
    },
    {
        id: "agent-map",
        title: "Agent Map and ownership controls",
        solutionId: "agent365",
        solution: "Agent 365",
        logo: "agent365.webp",
        status: "Public Preview",
        category: "Admin Experience",
        summary: "Agent Map helps administrators visualize and investigate ownerless, unmanaged, inactive or at-risk agents.",
        detail: "Available in the Microsoft 365 admin center, Agent Map displays agents by platform and provides details about ownership, configuration and activity. Condition-based rules can block or remove inactive and ownerless agents."
    },
    {
        id: "entra-agent-id",
        title: "Entra Agent ID: a first-class identity for every agent, now across more platforms",
        solutionId: "entra",
        solution: "Microsoft Entra",
        logo: "entra.webp",
        status: "Public Preview",
        category: "Admin Experience",
        summary: "Agents across Microsoft and connected platforms can receive their own Microsoft Entra identity.",
        detail: "IT teams can govern agent lifecycles, apply supported Conditional Access policies, assess identity risk and revoke access. Local agents can also receive an Agent ID, while an MCP firewall can restrict accessible servers and tools."
    },
    {
        id: "defender-runtime-protection",
        title: "Defender runtime protection for AI agents: stop prompt injection before agents act",
        solutionId: "security",
        solution: "Microsoft Security",
        logo: "defender.png",
        status: "Public Preview",
        category: "Admin Experience",
        summary: "Microsoft Defender analyzes prompts, tool calls and tool responses while an AI agent is operating.",
        detail: "Runtime protection is designed to detect malicious instructions and block harmful actions before execution. Protection extends to local agents on Windows and third-party agent platforms."
    },
    {
        id: "copilot-managed-runtime",
        title: "Copilot Managed Runtime: a Microsoft-managed home for apps and agents built with Copilot",
        solutionId: "copilot-studio",
        solution: "Copilot Studio",
        logo: "copilot-studio.webp",
        status: "General Availability",
        category: "Admin Experience",
        summary: "Copilot Managed Runtime provides a managed hosting layer for enterprise applications and agents.",
        detail: "The runtime operates in the customer tenant and provides Microsoft Entra authentication, governed connections, policies and audit logs. Code remains editable and versioned in Git, while administrators can inventory published applications in the Microsoft 365 admin center."
    },
    {
        id: "microsoft-iq",
        title: "Microsoft IQ: one enterprise context platform for every agent",
        solutionId: "microsoft-iq",
        solution: "Microsoft IQ",
        logo: "microsoft365.svg",
        status: "General Availability",
        category: "Admin Experience",
        summary: "Microsoft IQ combines Work IQ, Fabric IQ, Foundry IQ and Web IQ into an enterprise context platform.",
        detail: "More than 350 third-party connectors help organizations capture, govern and reuse business knowledge. Reusable business plugins package context, skills and tools for Copilot, GitHub Copilot, Foundry, ChatGPT and Claude."
    },
    {
        id: "agent-grid-sandbox",
        title: "Agent Grid and Agent Sandbox for AKS: secure agent traffic and isolated code execution",
        solutionId: "azure",
        solution: "Microsoft Azure",
        logo: "azure.png",
        status: "Public Preview",
        category: "Admin Experience",
        summary: "Agent Grid secures agent communication, while Agent Sandbox isolates agent-generated code on AKS.",
        detail: "Agent Sandbox is an Azure Kubernetes Service extension using isolated Kata microVMs or an Azure Container Instances runtime. Agent Grid provides secure communication among agents, models and services."
    },
    {
        id: "agent-365-cost-management",
        title: "Agent 365 Cost Management: plan, control and optimize AI spend",
        solutionId: "agent365",
        solution: "Agent 365",
        logo: "agent365.webp",
        status: "Public Preview",
        category: "FinOps AI",
        summary: "Agent 365 Cost Management helps organizations forecast AI demand and control budgets, models and billing methods.",
        detail: "Organizations can define limits for users, groups, agents and environments, configure alerts, support departmental chargeback and monitor Copilot Credit consumption across Microsoft AI products."
    },
    {
        id: "agent-365-business-analytics",
        title: "Agent 365 Business Analytics: connect AI spend to usage and business outcomes",
        solutionId: "agent365",
        solution: "Agent 365",
        logo: "agent365.webp",
        status: "Frontier",
        category: "FinOps AI",
        summary: "Agent 365 Business Analytics connects AI expenditure with usage, task success and assisted work.",
        detail: "The experience combines usage, spending forecasts, task success and assisted hours. Assisted hours estimate the work AI helped complete but do not directly measure time saved or financial return."
    },
    {
        id: "auto-microsoft-decision",
        title: "Auto and Microsoft-Decision-1.1: automatic model and effort selection to balance quality, speed and cost",
        solutionId: "copilot",
        solution: "Microsoft Copilot",
        logo: "copilot.png",
        status: "General Availability",
        category: "FinOps AI",
        summary: "Auto dynamically selects models and reasoning effort according to the requirements of each task.",
        detail: "Auto uses Microsoft-Decision-1.1 for routing, classification, prioritization, verification and workflow control. Employees can still manually choose supported OpenAI or Anthropic models when organizational policy permits."
    },
    {
        id: "aks-ai-manager-foundry",
        title: "AKS AI Manager for Foundry: run Foundry models and agents on your own Kubernetes clusters",
        solutionId: "foundry",
        solution: "Microsoft Foundry",
        logo: "foundry.jpeg",
        status: "Private Preview",
        category: "FinOps AI",
        summary: "AKS AI Manager lets organizations deploy Foundry models and hosted agents on existing AKS clusters.",
        detail: "Teams retain control over networking, identity, policy, GPU resources, regional placement, latency and data residency. Hosted agents on AKS were in limited preview, with public preview targeted for early December 2026."
    },
    {
        id: "azure-cobalt-200",
        title: "Azure Cobalt 200 VMs: up to 50% faster ARM compute for agentic workloads",
        solutionId: "azure",
        solution: "Microsoft Azure",
        logo: "azure.png",
        status: "General Availability",
        category: "FinOps AI",
        summary: "Azure Cobalt 200 provides new ARM-based virtual machines optimized for agentic and data-intensive workloads.",
        detail: "Microsoft reports up to 50 percent better performance than Cobalt 100, including improvements for web serving, AI agent tool execution, Java and databases. The virtual machines include new high-memory and fast local-storage sizes."
    },
    {
        id: "foundry-continuous-improvement",
        title: "Foundry continuous improvement: optimize agents on quality, latency and cost",
        solutionId: "foundry",
        solution: "Microsoft Foundry",
        logo: "foundry.jpeg",
        status: "Public Preview",
        category: "FinOps AI",
        summary: "Microsoft Foundry uses production signals to improve agent quality, latency and cost efficiency.",
        detail: "Agent Optimizer evaluates agent configurations and recommends improvements. Programmed Training, available in public preview, can automatically improve agents and models."
    },
    {
        id: "copilot-today",
        title: "Copilot Today: a proactive command center for your day inside Copilot Home",
        solutionId: "copilot",
        solution: "Microsoft Copilot",
        logo: "copilot.png",
        status: "Private Preview",
        category: "User Experience",
        summary: "Copilot Today brings email, calendar, Teams conversations, meetings and tasks together inside Copilot Home.",
        detail: "The experience highlights missed information and current priorities. It can also prepare editable drafts, propose schedule changes and surface contextual follow-up actions."
    },
    {
        id: "copilot-studio-apps-agents-workflows",
        title: "Copilot Studio: build apps alongside agents and workflows, running on Copilot Managed Runtime",
        solutionId: "copilot-studio",
        solution: "Copilot Studio",
        logo: "copilot-studio.webp",
        status: "General Availability",
        category: "User Experience",
        summary: "Copilot Studio brings applications, agents and workflows together for end-to-end business automation.",
        detail: "The Microsoft Copilot harness supports long-running, multi-step work and operates until the task or configured budget is complete. Copilot Studio also includes app creation, co-editing, evaluation, monitoring and Git-based source control."
    },
    {
        id: "copilot-studio-agent-accounts",
        title: "Agent Accounts, memory and triggers in Copilot Studio: persistent, proactive agents",
        solutionId: "copilot-studio",
        solution: "Copilot Studio",
        logo: "copilot-studio.webp",
        status: "Frontier",
        category: "User Experience",
        summary: "Copilot Studio agents can receive an Entra identity, mailbox, Teams presence, memory and autonomous triggers.",
        detail: "Agent Accounts allow agents to respond to emails, Teams messages and Office document comments. In the preview, agent memory may be shared across users interacting with an agent, users cannot opt out individually, and memories are erased after 28 days without interaction."
    },
    {
        id: "microsoft-perception",
        title: "Microsoft Perception: red, blue and green AI agents for security operations",
        solutionId: "security",
        solution: "Microsoft Security",
        logo: "defender.png",
        status: "General Availability",
        category: "Admin Experience",
        summary: "Microsoft Perception coordinates red, blue and green AI agents through automated security playbooks.",
        detail: "Red agents simulate attacks, blue agents detect threats and investigate alerts, and green agents implement fixes. The solution integrates with Defender, Entra, Intune, Sentinel and Purview."
    },
    {
        id: "windows-security-agent-era",
        title: "Windows security for the agent era: endpoint security platform, administrator protection and baseline protection",
        solutionId: "windows",
        solution: "Windows",
        logo: "windows.png",
        status: "General Availability",
        category: "Admin Experience",
        summary: "Windows introduces endpoint security, administrator protection and baseline protection capabilities for the agent era.",
        detail: "The endpoint security platform helps security providers move selected protections from kernel mode to user mode. Administrator protection uses standard privileges by default and task-based elevation after Windows Hello verification."
    },
    {
        id: "windows-server-2028",
        title: "Windows Server 2028: the next server OS built for hybrid AI",
        solutionId: "windows",
        solution: "Windows",
        logo: "windows.png",
        status: "Public Preview",
        category: "Azure & Infrastructure",
        summary: "Windows Server 2028 targets secure hybrid and AI-enabled infrastructure.",
        detail: "The release adds a hardened security baseline, native NVMe support, post-quantum cryptography and Microsoft Foundry connectivity. It also supports new AI hardware from AMD and NVIDIA."
    },
    {
        id: "azure-catalyst",
        title: "Azure Catalyst: agent-led application, database and infrastructure modernization",
        solutionId: "azure",
        solution: "Microsoft Azure",
        logo: "azure.png",
        status: "Public Preview",
        category: "Azure & Infrastructure",
        summary: "Azure Catalyst uses agents to discover, assess, plan and migrate applications, databases and infrastructure.",
        detail: "Azure Catalyst combines Azure Migrate with GitHub Copilot modernization. It analyzes dependencies, estimates value and supports modernization scenarios involving VMware, Hyper-V, Azure Local, .NET, Java and SQL."
    },
    {
        id: "agentic-operations-azure",
        title: "Agentic operations on Azure",
        solutionId: "azure",
        solution: "Microsoft Azure",
        logo: "azure.png",
        status: "General Availability",
        category: "Azure & Infrastructure",
        summary: "Agents and MCP capabilities can create, manage, update and monitor Azure resources.",
        detail: "The portfolio includes the ARM MCP Server, Azure Copilot deployment agent, Azure Monitor health models and Azure SRE Agent. Operations remain subject to Azure Policy and organizational governance."
    },
    {
        id: "azure-fabric-horizondb",
        title: "Azure HorizonDB and Fabric HorizonDB: PostgreSQL for AI applications and analytics",
        solutionId: "fabric",
        solution: "Microsoft Fabric",
        logo: "fabric.png",
        status: "General Availability",
        category: "Azure & Infrastructure",
        summary: "Azure HorizonDB and Fabric HorizonDB connect PostgreSQL applications with analytics and AI.",
        detail: "Azure HorizonDB is a managed, PostgreSQL-compatible database for mission-critical applications. Fabric HorizonDB connects operational PostgreSQL data with analytics and AI without requiring the source data to be copied."
    },
    {
        id: "azure-resilience-confidential-computing",
        title: "Azure resilience and confidential computing: Chaos Studio Workspaces and new protections for sensitive data",
        solutionId: "azure",
        solution: "Microsoft Azure",
        logo: "azure.png",
        status: "General Availability",
        category: "Azure & Infrastructure",
        summary: "Azure adds reusable resilience testing and expanded confidential-computing protection.",
        detail: "Chaos Studio Workspaces and the AKS extension support reusable disruption scenarios with fewer permissions. New confidential-computing capabilities protect sensitive information while it is being processed."
    },
    {
        id: "copilot-studio-in-code",
        title: "Copilot Studio in code: develop agents locally, version them in Git and publish with a CLI",
        solutionId: "developer-tools",
        solution: "Developer Tools",
        logo: "developer.png",
        status: "Public Preview",
        category: "User Experience",
        summary: "Developers can build Copilot Studio agents locally, version changes in Git and publish through command-line tools.",
        detail: "Developers can use VS Code with GitHub Copilot or Claude Code while makers continue working in the Copilot Studio web interface. The workflow introduces pull requests, instruction reviews and a traceable change history."
    },
    {
        id: "code-agents",
        title: "Code Agents: bring your own coded agent to Copilot Managed Runtime",
        solutionId: "developer-tools",
        solution: "Developer Tools",
        logo: "developer.png",
        status: "Private Preview",
        category: "User Experience",
        summary: "Custom-coded agents can be hosted and managed through Copilot Managed Runtime.",
        detail: "Teams can use their preferred framework, model and orchestration approach. Microsoft then manages hosting, Microsoft Entra identity, channels, monitoring and lifecycle so the agent can be surfaced in Teams or Microsoft 365."
    },
    {
        id: "copilot-sdk-2",
        title: "Microsoft Copilot SDK 2.0: embed the Copilot harness in your own applications",
        solutionId: "developer-tools",
        solution: "Developer Tools",
        logo: "developer.png",
        status: "General Availability",
        category: "User Experience",
        summary: "Microsoft Copilot SDK 2.0 lets developers embed the Microsoft Copilot harness inside custom applications.",
        detail: "The SDK is available for TypeScript, Python, Go, .NET, Java and Rust. It uses the same underlying harness as the new Copilot Studio experience."
    },
    {
        id: "windows-365-agents",
        title: "Windows 365 for Agents and Computer Use in the Microsoft Copilot harness",
        solutionId: "windows365",
        solution: "Windows 365",
        logo: "windows365.svg",
        status: "Coming soon",
        category: "User Experience",
        summary: "Windows 365 for Agents allows AI agents to operate applications through a managed Cloud PC.",
        detail: "Computer Use is billed through Copilot Credits. It is intended for processes that vary and require contextual judgment, while Power Automate Desktop remains relevant for stable, repeatable and high-volume automation."
    },
    {
        id: "power-platform-dataverse-updates",
        title: "Power Platform and Dataverse updates: Power Apps, Power Automate Desktop and Dataverse as the database for agents",
        solutionId: "power-platform",
        solution: "Power Platform",
        logo: "power-platform.webp",
        status: "General Availability",
        category: "User Experience",
        summary: "Microsoft introduces updates across Power Apps, Power Automate Desktop, Dataverse and coding-agent integrations.",
        detail: "Updates include modern Power Apps controls, Data Grid pagination, responsive SharePoint forms, AI record summaries in Dataverse, reusable Power Automate Desktop templates and a scheduled desktop-flow trigger in preview."
    }
];

/*
 * Solution metadata used to build the homepage Solution Map.
 *
 * Counts must NOT be entered manually.
 * Use getAnnouncementCount(solution.id) instead.
 */

const solutions = [
    {
        id: "copilot",
        name: "Microsoft Copilot",
        logo: "copilot.png",
        description: "Copilot Home, Workspaces, Autopilot, Today, Code and Auto."
    },
    {
        id: "m365",
        name: "Microsoft 365",
        logo: "microsoft365.svg",
        description: "Office and productivity experiences inside Copilot."
    },
    {
        id: "copilot-studio",
        name: "Copilot Studio",
        logo: "copilot-studio.webp",
        description: "Agents, workflows, applications and managed runtime."
    },
    {
        id: "agent365",
        name: "Agent 365",
        logo: "agent365.webp",
        description: "Agent governance, ownership, cost and analytics."
    },
    {
        id: "azure",
        name: "Microsoft Azure",
        logo: "azure.png",
        description: "Cloud infrastructure built for the agentic era."
    },
    {
        id: "entra",
        name: "Microsoft Entra",
        logo: "entra.webp",
        description: "Identity and lifecycle management for AI agents."
    },
    {
        id: "security",
        name: "Microsoft Security",
        logo: "defender.png",
        description: "Runtime protection and agent-based security operations."
    },
    {
        id: "fabric",
        name: "Microsoft Fabric",
        logo: "fabric.png",
        description: "Operational data connected with analytics and AI."
    },
    {
        id: "foundry",
        name: "Microsoft Foundry",
        logo: "foundry.jpeg",
        description: "Agent deployment, optimization and continuous improvement."
    },
    {
        id: "power-platform",
        name: "Power Platform",
        logo: "power-platform.webp",
        description: "Power Apps, Power Automate and Dataverse."
    },
    {
        id: "dynamics365",
        name: "Dynamics 365",
        logo: "dynamics365.svg",
        description: "Sales and ERP capabilities integrated with Copilot."
    },
    {
        id: "windows",
        name: "Windows",
        logo: "windows.png",
        description: "Endpoint security, servers and hybrid AI."
    },
    {
        id: "windows365",
        name: "Windows 365",
        logo: "windows365.svg",
        description: "Managed Cloud PCs for AI agent Computer Use."
    },
    {
        id: "microsoft-iq",
        name: "Microsoft IQ",
        logo: "microsoft365.svg",
        description: "Enterprise context through Work IQ and Microsoft IQ."
    },
    {
        id: "developer-tools",
        name: "Developer Tools",
        logo: "developer.png",
        description: "SDKs, coded agents, Git and local development."
    },
    {
        id: "business-applications",
        name: "Business Applications",
        logo: "dynamics365.svg",
        description: "Enterprise business systems connected to Copilot."
    }
];

/*
 * Shared helper functions.
 */

function getAnnouncementsBySolution(solutionId) {
    return announcements.filter(
        announcement => announcement.solutionId === solutionId
    );
}

function getAnnouncementCount(solutionId) {
    return getAnnouncementsBySolution(solutionId).length;
}

function getSolutionById(solutionId) {
    return solutions.find(
        solution => solution.id === solutionId
    );
}

function getUniqueAnnouncementValues(property) {
    return [
        ...new Set(
            announcements
                .map(announcement => announcement[property])
                .filter(Boolean)
        )
    ].sort((firstValue, secondValue) =>
        firstValue.localeCompare(secondValue)
    );
}

/*
 * Optional validation.
 *
 * These messages appear in the browser developer console if:
 * - an announcement is missing required information;
 * - an announcement has an unknown solutionId;
 * - two announcements use the same ID.
 */

function validateAnnouncementsDatabase() {
    const errors = [];
    const announcementIds = new Set();
    const validSolutionIds = new Set(
        solutions.map(solution => solution.id)
    );

    announcements.forEach((announcement, index) => {
        const position = index + 1;

        if (!announcement.id) {
            errors.push(
                `Announcement ${position} is missing an id.`
            );
        } else if (announcementIds.has(announcement.id)) {
            errors.push(
                `Duplicate announcement id: ${announcement.id}`
            );
        } else {
            announcementIds.add(announcement.id);
        }

        if (!announcement.title) {
            errors.push(
                `Announcement ${position} is missing a title.`
            );
        }

        if (!announcement.solutionId) {
            errors.push(
                `${announcement.title || `Announcement ${position}`} ` +
                "is missing a solutionId."
            );
        } else if (
            !validSolutionIds.has(announcement.solutionId)
        ) {
            errors.push(
                `${announcement.title} uses unknown solutionId: ` +
                announcement.solutionId
            );
        }

        if (!announcement.solution) {
            errors.push(
                `${announcement.title || `Announcement ${position}`} ` +
                "is missing a solution name."
            );
        }

        if (!announcement.status) {
            errors.push(
                `${announcement.title || `Announcement ${position}`} ` +
                "is missing a status."
            );
        }

        if (!announcement.category) {
            errors.push(
                `${announcement.title || `Announcement ${position}`} ` +
                "is missing a category."
            );
        }
    });

    if (errors.length > 0) {
        console.error(
            "Announcements database validation failed:",
            errors
        );

        return false;
    }

    console.info(
        `Announcements database validated: ` +
        `${announcements.length} announcements across ` +
        `${solutions.length} solution families.`
    );

    return true;
}

validateAnnouncementsDatabase();