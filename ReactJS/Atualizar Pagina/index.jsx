setTimeout(() => {
  // atualiza a página após o delay
  onClose();
  window.location.reload();
}, 1500);

// OU

window.location.href = `/PAGE`;
