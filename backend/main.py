
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()





app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request validation
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]


def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    """
    Check if the graph is a Directed Acyclic Graph (DAG) using DFS.
    Returns True if DAG, False if cycle exists.
    """
    # Build adjacency list
    graph = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        if source in graph:
            graph[source].append(target)
    
    # Track visited nodes and recursion stack for cycle detection
    visited = set()
    rec_stack = set()
    
    def has_cycle(node_id: str) -> bool:
        """DFS helper to detect cycles"""
        visited.add(node_id)
        rec_stack.add(node_id)
        
        # Visit all neighbors
        for neighbor in graph.get(node_id, []):
            # If neighbor not visited, recurse
            if neighbor not in visited:
                if has_cycle(neighbor):
                    return True
            # If neighbor in recursion stack, cycle detected
            elif neighbor in rec_stack:
                return True
        
        # Remove from recursion stack after exploring
        rec_stack.remove(node_id)
        return False
    
    # Check all nodes (handles disconnected components)
    for node in nodes:
        node_id = node['id']
        if node_id not in visited:
            if has_cycle(node_id):
                return False  # Cycle found, not a DAG
    
    return True  # No cycles, is a DAG


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    """
    Parse pipeline data and return:
    - num_nodes: count of nodes
    - num_edges: count of edges
    - is_dag: whether the graph is a DAG
    """
    nodes = data.nodes
    edges = data.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag_status = is_dag(nodes, edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': dag_status
    }
print("Backend server is running...")