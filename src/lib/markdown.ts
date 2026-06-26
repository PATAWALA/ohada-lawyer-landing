export function markdownToHtml(markdown: string): string {
  // Séparer en lignes
  const lines = markdown.split('\n');
  let html = '';
  let inList = false;
  let listType: 'ul' | 'ol' | null = null;

  for (const line of lines) {
    // Titres H2
    const h2Match = line.match(/^## (.+)$/);
    if (h2Match) {
      if (inList) { html += `</${listType}>`; inList = false; listType = null; }
      html += `<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">${h2Match[1]}</h2>`;
      continue;
    }
    // Titres H3
    const h3Match = line.match(/^### (.+)$/);
    if (h3Match) {
      if (inList) { html += `</${listType}>`; inList = false; listType = null; }
      html += `<h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">${h3Match[1]}</h3>`;
      continue;
    }
    // Liste non ordonnée
    const ulMatch = line.match(/^- (.+)$/);
    if (ulMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) html += `</${listType}>`;
        html += '<ul class="list-disc pl-6 space-y-2 mb-4">';
        inList = true;
        listType = 'ul';
      }
      html += `<li class="text-slate-700">${ulMatch[1]}</li>`;
      continue;
    }
    // Liste ordonnée
    const olMatch = line.match(/^\d+\. (.+)$/);
    if (olMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) html += `</${listType}>`;
        html += '<ol class="list-decimal pl-6 space-y-2 mb-4">';
        inList = true;
        listType = 'ol';
      }
      html += `<li class="text-slate-700">${olMatch[1]}</li>`;
      continue;
    }
    // Si on était dans une liste et que la ligne ne continue pas la liste
    if (inList) {
      html += `</${listType}>`;
      inList = false;
      listType = null;
    }
    // Citation
    const quoteMatch = line.match(/^> (.+)$/);
    if (quoteMatch) {
      html += `<blockquote class="border-l-4 border-teal-700 bg-slate-50 p-4 mb-6 italic text-slate-600">${quoteMatch[1]}</blockquote>`;
      continue;
    }
    // Gras **texte**
    const boldLine = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900">$1</strong>');
    // Paragraphe normal
    if (boldLine.trim() === '') {
      html += '<br />';
    } else {
      html += `<p class="text-slate-700 leading-relaxed mb-4">${boldLine}</p>`;
    }
  }
  // Fermer une éventuelle liste restée ouverte
  if (inList) html += `</${listType}>`;

  return html;
}