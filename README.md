# VectorShift Frontend Assessment

# VectorShift Pipeline Builder

Visual workflow builder with node-based architecture and DAG validation.

## What I Built

Demo Link : https://drive.google.com/file/d/11BE96Qqmu-_mIfy_qohfQd-V6BO1qtOg/view?usp=sharing
### Part 1: Node Abstraction

Created `BaseNode.jsx` - a config-driven component that eliminates code duplication.

**Before:** Each node = 100+ lines of duplicated code  
**After:** Each node = 20 lines of config

**5 New Nodes:** API, Transform, Filter, Delay, Math

### Part 2: Styling

Clean, professional UI with consistent design across all components.

### Part 3: Dynamic Text Handles

Text node parses `{{ variableName }}` syntax and creates input handles automatically.

### Part 4: Backend Integration

- FastAPI endpoint validates pipeline structure
- DFS algorithm detects cycles (DAG validation)
- Returns: `{num_nodes, num_edges, is_dag}`

## Features

- **5 Node Types**: Input, Output, LLM, Text, Transform/Filter, Delay
- **Dynamic Handles**: `{{variable}}` in Text nodes creates input handles
- **DAG Validation**: Cycle detection frontend + backend
- **Submit Pipeline**: POST `/api/pipelines/parse`
- **Production UI**: Matches VectorShift design system

## Quick Test

1. Add Input → Text → LLM → Output
2. Connect `{{input}}` from Text to LLM
3. Submit → `{num_nodes: 4, num_edges: 3, is_dag: true}`
4. Create cycle → Error shown

## Architecture Decisions

**Node Abstraction:**

- **Why config-driven?** Add new nodes in <10 minutes vs hours
- **Trade-off:** Less flexibility per node, more consistency across system

**DAG Validation:**

- **Algorithm:** DFS with recursion stack
- **Why not topological sort?** DFS is simpler and more efficient for cycle detection

## Setup

**Frontend:**

````bash
cd frontend
npm install
npm start

**Backend:**
```bash
cd backend
uvicorn main:app --reload


## Testing

1. Create pipeline: Input → Transform → Output
2. Click "Submit Pipeline"
3. Verify alert shows: "Nodes: 3, Edges: 2, Is DAG: true"

**Edge Cases Tested:**
- Empty pipeline
- Disconnected nodes
- Cycles (returns `is_dag: false`)

---

## Tech Stack

React • ReactFlow • FastAPI • Python
````
