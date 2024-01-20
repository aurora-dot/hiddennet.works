import sigma from "https://cdn.jsdelivr.net/npm/sigma@3.0.0-alpha3/+esm";

const container = document.getElementById("sigma-container");
const graph = new graphology.Graph();

graph.addNode("praxis", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "City of Praxis",
  color: "red",
});

graph.addNode("joeyy", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Joeyy",
  color: "red",
});

graph.addNode("hyde", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Sam Hyde",
  color: "red",
});

graph.addNode("thiel", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Peter Thiel",
  color: "red",
});

graph.addNode("palantir", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Palantir",
  color: "red",
});

graph.addNode("milady", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Milady NFT",
  color: "red",
});

graph.addNode("brg", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "basedrwordgang",
  color: "red",
});

graph.addNode("fang", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Charlotte Fang / Krishna Okhandiar",
  color: "red",
});

graph.addNode("kaliacc", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Kaliacc",
  color: "red",
});

graph.addNode("systemspace", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Systemspace",
  color: "red",
});

graph.addNode("prayingg", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Prayingg",
  color: "red",
});

graph.addNode("deathgrips", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Death Grips",
  color: "red",
});

graph.addNode("yoo", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Sua Yoo",
  color: "red",
});

graph.addNode("abyssVoyeur", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "abyssVoyeur",
  color: "red",
});

graph.addNode("viper", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Viper",
  color: "red",
});

graph.addNode("kallio", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Ville Kallio",
  color: "red",
});

graph.addNode("pch", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Porpentine Charity Heartscape",
  color: "red",
});

graph.addNode("ada", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Ada Rook",
  color: "red",
});

graph.addNode("devi", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Devi McCallion",
  color: "red",
});

graph.addNode("bd", {
  x: Math.random(),
  y: Math.random(),
  size: 10,
  label: "Black Dresses",
  color: "red",
});

graph.addEdge("praxis", "joeyy");
graph.addEdge("praxis", "thiel");
graph.addEdge("joeyy", "hyde");
graph.addEdge("thiel", "palantir");
graph.addEdge("fang", "palantir");
graph.addEdge("fang", "brg");
graph.addEdge("fang", "kaliacc");
graph.addEdge("fang", "milady");
graph.addEdge("fang", "systemspace");
graph.addEdge("joeyy", "prayingg");
graph.addEdge("deathgrips", "prayingg");
graph.addEdge("deathgrips", "yoo");
graph.addEdge("abyssVoyeur", "yoo");
graph.addEdge("viper", "abyssVoyeur");
graph.addEdge("kallio", "abyssVoyeur");
graph.addEdge("kallio", "pch");
graph.addEdge("ada", "abyssVoyeur");
graph.addEdge("ada", "pch");
graph.addEdge("devi", "pch");
graph.addEdge("devi", "ada");
graph.addEdge("bd", "pch");
graph.addEdge("ada", "bd");
graph.addEdge("devi", "bd");

console.log(Object.getOwnPropertyNames(graphologyLibrary));

const positions = graphologyLibrary.layoutNoverlap(graph, {
  maxIterations: 500,
  settings: {
    ratio: 2,
  },
});
graphologyLibrary.layoutNoverlap.assign(graph);

const renderer = new sigma.Sigma(graph, container);

const state = {};
renderer.on("enterNode", ({ node }) => {
  state.hoveredNode = node;
  state.hoveredNeighbors = new Set(graph.neighbors(node));
  renderer.refresh();
});

renderer.on("leaveNode", () => {
  state.hoveredNode = undefined;
  state.hoveredNeighbors = undefined;
  renderer.refresh();
});

renderer.setSetting("nodeReducer", (node, data) => {
  const res = { ...data };

  if (
    state.hoveredNeighbors &&
    !state.hoveredNeighbors.has(node) &&
    state.hoveredNode !== node
  ) {
    res.label = "";
    res.color = "#f6f6f6";
  }

  if (state.selectedNode === node) {
    res.highlighted = true;
  }
  return res;
});

renderer.setSetting("edgeReducer", (edge, data) => {
  const res = { ...data };
  if (state.hoveredNode && !graph.hasExtremity(edge, state.hoveredNode)) {
    res.hidden = true;
  }
  return res;
});

renderer.refresh();
