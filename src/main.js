document.getElementById('action').addEventListener('click', () => {
  const t = new Date().toLocaleString();
  document.getElementById('output').textContent = `Button clicked at ${t}`;
});
