function formatError(err) {
  let formatted = err;

  if (err.slice(0,8) === "instance") {
    formatted = err.slice(9);
  }

  return formatted.slice(0, 1).toUpperCase() + formatted.slice(1);
}

export { formatError };
