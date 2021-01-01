import React from 'react';

export default function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span>All</span>
    </button>
  );
}