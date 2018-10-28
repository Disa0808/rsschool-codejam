const recursion = function recursion(three) {
  if (!three) return "The input parameter must be a binary tree.";
  const data = [];

  function traverse(node, lvl) {
    if (!data[lvl]) data[lvl] = [];
    data[lvl].push(node.value);
    const level = lvl + 1;
    if (node.left) traverse(node.left, level);
    if (node.right) traverse(node.right, level);
  }
  traverse(three, 0);
  return data;
};

module.exports = recursion;
