export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Titres H2 (##)
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">$1</h2>');
  // Titres H3 (###)
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">$1</h3>');

  // Listes non ordonnées (- élément)
  html = html.replace(/^- (.+)$/gm, '<li class="text-slate-700">$1</li>');
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 space-y-2 mb-4">$1</ul>');

  // Listes ordonnées (1. élément)
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="text-slate-700">$1</li>');
  // Simplification : on encapsule les <li> consécutifs dans <ol>
  html = html.replace(/((?:<li.*<\/li>\s*)+)/g, (match) => {
    if (match.includes('<li')) {
      return `<ol class="list-decimal pl-6 space-y-2 mb-4">${match}</ol>`;
    }
    return match;
  });

  // Gras **texte**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900">$1</strong>');

  // Citations >
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-teal-700 bg-slate-50 p-4 mb-6 italic text-slate-600">$1</blockquote>');

  // Sauts de ligne simples en paragraphes (après avoir traité les blocs)
  html = html.replace(/\n\n/g, '</p><p class="text-slate-700 leading-relaxed mb-4">');
  html = html.replace(/\n/g, '<br />');

  // Encapsuler le tout dans un paragraphe initial si nécessaire
  if (!html.startsWith('<')) {
    html = `<p class="text-slate-700 leading-relaxed mb-4">${html}</p>`;
  }

  return html;
}