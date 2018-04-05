#!/usr/bin/env python3
"""
    Python3 program: Implementation of Graph Data structure
    Created: Sadip Giri (sadipgiri@bennington.edu)
    Date: 27th March, 2018 
"""

# importing defaultdict from collections package
from collections import defaultdict

class Graph(object):
    # initialization
    def __init__(self, connections, directed=False):
        self._graph = defaultdict(set)
        self._directed = directed
        self.add_connections(connections)

    def add_connections(self, connections):
        for node1, node2 in connections:
            self.add(node1, node2)

    # adding connection between two nodes
    def add(self, node1, node2):
        self._graph[node1].add(node2)
        if not self._directed:
            self._graph[node2].add(node1)

    # removing references to node
    def remove(self, node):
        for n, cxns in self._graph.iteritems():
            try:
                cxns.remove(node)
            except KeyError:
                pass
        try:
            del self._graph[node]
        except KeyError:
            pass

    # checking the connection between two nodes
    def is_connected(self, node1, node2):
        return node1 in self._graph and node2 in self._graph[node1]

    # finding the path between nodes which is not necessarily shortest
    def find_path(self, node1, node2, path=[]):
        path = path + [node1]
        if node1 == node2:
            return path
        if node1 not in self._graph:
            return None
        for node in self._graph[node1]:
            if node not in path:
                new_path = self.find_path(node, node2, path)
                if new_path:
                    return new_path
        return None

    def __str__(self):
        return '{}({})'.format(self.__class__.__name__, dict(self._graph))

    if __name__ == '__main__':
        main()
"""
    Note: References: python implmentation of graph data structure
"""