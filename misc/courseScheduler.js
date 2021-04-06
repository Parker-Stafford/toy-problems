
// brute force slow approach
var canFinish = function (numCourses, prerequisites) {
  const graph = {};
  const classes = [];
  let hasCycle = false;
  for (let i = 0; i < numCourses; i++) {
    graph[i] = {
      children: [],
      parents: [],
    }
  }
  for (let req of prerequisites) {
    graph[req[0]].parents.push(req[1]);
    graph[req[1]].children.push(req[0]);
  }
  let noParents = [];
  for (let key in graph) {
    if (graph[key].parents.length === 0) {
      noParents.push(key);
    }
  }
  if (noParents.length === 0) {
    return false;
  }
  function traverse(val, visited) {
    let node = graph[val]
    for (let i = 0; i < node.children.length; i++) {
      if (!visited[node.children[i]]) {
        visited[node[children[i]]] = true;
        traverse(node[children[i]], visited);
        if (hasCycle) return true;
      } else {
        hasCycle = true;
        return;
      }
    }
  }
  for (let i = 0; i < noParents.length; i++) {
    let tracker = {}
    tracker[noParents[i]] = true
    traverse(noParents[i], tracker);
  }
  return !hasCycle;
}

// queue and array of prereq counts
function canFinish(numCourses, prerequisites) {
  const graph = {};
  const numOfPrereqs = new Array(numCourses).fill(0);
  // make graph nodes for each course
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  // push dependents into each node
  for (let req of prerequisites) {
    graph[req[1]].push(req[0]);
    numOfPrereqs[req[0]]++;
  }
  let count = 0;
  let queue = [];
  // add courses with no pre-reqs into queue and add to count of taken classes
  for (let i = 0; i < numOfPrereqs.length; i++) {
    if (!numOfPrereqs[i]) {
      queue.push(i);
      count++;
    }
  }
  // while there are course with no pre-reqs
  while (queue.length) {
    let course = queue.shift();
    // Iterate through courses dependents and decrement their pre-req count
    for (let i = 0; i < graph[course].length; i++) {
      numOfPrereqs[graph[course][i]]--;
      if (!numOfPrereqs[graph[course][i]]) {
        // if a course no longer has pre-req's add it to the queue
        queue.push(graph[course][i]);
        // increment count of taken classes
        count++;
      }
    }
  }
  return count === numCourses;
}