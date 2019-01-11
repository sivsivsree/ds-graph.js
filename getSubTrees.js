class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    addEdge(node1, node2, weight = 1) {
        this.edges[node1].push({ node: node2, weight: weight });
        this.edges[node2].push({ node: node1, weight: weight });
    }

    addDirectedEdge(node1, node2, weight = 1) {
        this.edges[node1].push({ node: node2, weight: weight });
    }


    display() {
        let graph = [];
        this.nodes.forEach(node => {
            graph.push({ [node]: JSON.stringify(this.edges[node]) });
        });
        console.log(graph);
    }

    graph() {
        let graph = [];
        this.nodes.forEach(node => {
            graph.push({ [node]: this.edges[node] });
        });
        console.log(graph);
        return graph;
    }

    relations() {
        console.log(this.nodes);
        console.log(this.edges);
        this.nodes.forEach(node => {
            this.edges[node].forEach((n)=>{
                console.log(node, n);
            })
        });
    }
};



let g = new Graph();

g.addNode('a');
g.addNode('b');
g.addNode('c');
g.addNode('d');

g.addEdge('a', 'b');
g.addEdge('b', 'c');
g.addEdge('c', 'd');



g.relations();


