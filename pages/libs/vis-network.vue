<template>
    <div>
        <h1>vis-network</h1>
        <a href="https://github.com/visjs/vis-network">https://github.com/visjs/vis-network</a>
        <div id="mynetwork">

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {DataSet,Network} from "vis-network/standalone/umd/vis-network.min.js"

export default Vue.extend({
    mounted(){
            // create an array with nodes
      const nodes = new DataSet([
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" },
        { id: 4, label: "Node 4" },
        { id: 5, label: "Node 5" },
      ]);

      // create an array with edges
      const edges = new DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 3 },
      ]);

      // create a network
      const container = document.getElementById("mynetwork") as HTMLDivElement;
      console.log(container)
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new Network(container, data, options);  
    }
})
</script>

<style scoped>
#mynetwork {
    width: 600px;
    height: 400px;
    border: 1px solid lightgray;
}
</style>