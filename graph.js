const container = document.getElementById("sigma-container");
const graph = new graphology.Graph();

graph.addNode("praxis", {
  x: 10,
  y: 0,
  size: 3,
  label: "City of Praxis",
  color: "red",
});

const renderer = new Sigma(graph, container);
