import type { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export interface AxeViolation {
  id: string;
  impact: string | undefined;
  description: string;
  helpUrl: string;
  nodes: Array<{ html: string; failureSummary: string | undefined }>;
}

export async function runAxe(page: Page, selector?: string): Promise<AxeViolation[]> {
  let builder = new AxeBuilder({ page });
  if (selector) {
    builder = builder.include(selector);
  }

  const results = await builder.analyze();

  return results.violations.map((v) => ({
    id: v.id,
    impact: v.impact ?? undefined,
    description: v.description,
    helpUrl: v.helpUrl,
    nodes: v.nodes.map((n) => ({
      html: n.html,
      failureSummary: n.failureSummary ?? undefined,
    })),
  }));
}
