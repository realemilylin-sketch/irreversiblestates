import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rapide from "starlight-theme-rapide";

export default defineConfig({
  site: "https://irreversiblestates.com",
  integrations: [
    starlight({
      title: "Irreversible States",
      description:
        "A reference definition of irreversible states and finality conditions in real-world processes.",

      // +++ ADD THIS BLOCK +++
      footer: {
        text: "Contact: contact@irreversiblestates.com",
      },
      // +++ END +++

      sidebar: [
        { label: "Reading Guide", link: "/reading-guide/" },

        { label: "Foundations", items: [{ label: "Overview", link: "/foundations/" }] },
        { label: "Mechanisms", items: [{ label: "Overview", link: "/mechanisms/" }] },

        {
          label: "Playbooks",
          items: [
            { label: "Overview", link: "/playbooks/" },
            { label: "Acceptance / Handoff Finality", link: "/playbooks/acceptance-handoff-finality/" },
          ],
        },

        {
          label: "Case Library",
          items: [
            { label: "Overview", link: "/case-library/" },
            { label: "Inbound Odor Rejection at Receiving", link: "/case-library/inbound-odor-rejection/" },
          ],
        },

        {
          label: "Toolkit",
          items: [{ label: "Evidence Output Spec", link: "/toolkit/evidence-output-spec/" }],
        },

        { label: "Glossary", link: "/glossary/" },
        { label: "Colophon", link: "/meta/colophon/" },
      ],
    }),
  ],
});

