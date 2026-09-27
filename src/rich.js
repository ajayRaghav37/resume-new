import React from 'react';

// Renders **bold** and *italic* markers from data strings as <b> and <em>.
export default function rich(text) {
  if (!text) return null;
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**')) return <b key={i}>{part.slice(2, -2)}</b>;
    if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export function range(start, end) {
  if (!end || start === end) return start;
  return `${start} \u2013 ${end}`;
}
