const container = document.getElementById("sigma-container");
const graph = new graphology.Graph();

graph.addNode("Praxis Society", {
  x: 10,
  y: 0,
  size: 3,
  label: "Praxis Society",
  color: "red",
});

const renderer = new Sigma(graph, container);
