import { html, type TemplateResult } from 'lit';

export function renderPermutations<T>(
  permutations: T[],
  render: (props: T, index: number) => TemplateResult,
): TemplateResult {
  return html`${permutations.map((p, i) => render(p, i))}`;
}
