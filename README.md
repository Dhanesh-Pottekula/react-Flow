# React Flow Project

This project is hosted on Vercel: [React Flow Project](https://react-flow-woad.vercel.app/)

## Installation

1. Clone the repository.
2. Run `npm i` to install all the necessary packages.
3. Run `npm run dev` to start the project.

## Packages

- **TailwindCSS**: Used for UI styling.
- **ReactFlow**: Used for node management.

## Features

### Text Node

- Supports text messages.
- Drag it from the Nodes Panel to create a new node.

### Nodes Panel

- Supports text messages.
- Designed to be extensible to include other types of nodes in the future.

### Custom Edges

- Created custom edges in the "components" folder.
- Designed to be easily modifiable.

### Source Handle

- Can only have one edge connecting to it.
- The target handle may have more than one edge connecting to it.

### Settings Panel

- Includes an option to create a new node.
- If a node is selected, the settings panel displays an edit message input field to edit the node.

### Save Button

- Clicking the save button checks all the nodes and displays an error message if more than one target node is empty.
