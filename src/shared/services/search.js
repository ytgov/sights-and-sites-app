function formatSearchIndex(query) {
  return query ? query.replace(/[^A-Z0-9]+/ig, '').toLowerCase().trim() : '';
}

export { formatSearchIndex };