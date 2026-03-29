# To-Do List

## Research Problem

Managing daily tasks efficiently is a common challenge for students and professionals alike. Without an organized system, individuals often forget important tasks or struggle to track their progress. This project addresses the need for a simple, accessible tool to create, manage, and track tasks.

## Motivation

The motivation behind this project stems from the fundamental need for personal productivity management. As a student in the SEN204 - Internet and Web Programming course, this To-Do List application serves as a practical demonstration of core web development concepts including HTML5 structure, CSS styling, and JavaScript DOM manipulation. The goal is to create a user-friendly interface that allows users to quickly add, complete, and delete tasks without any complex setup or external dependencies.

## Control Flow

1. **User Input**: User enters a task description in the input field
2. **Add Task**: User clicks "Add Task" button or presses Enter
3. **Task Creation**: JavaScript creates a new list item with task text and delete button
4. **Display**: New task appears in the task list
5. **Mark Complete**: User clicks on task text to toggle completion status
6. **Delete Task**: User clicks "Delete" button to remove task from list
7. **Persistence**: Tasks remain visible until deleted or page is refreshed

## Implementation Strategy

The To-Do List application follows a three-layer architecture:

- **HTML Layer**: Provides semantic structure with a header, input section, and unordered list container for tasks
- **CSS Layer**: Implements responsive design using Flexbox, modern styling with hover effects, and visual feedback for completed tasks
- **JavaScript Layer**: Uses event-driven DOM manipulation to add new tasks, toggle completion status, and remove tasks from the DOM

The implementation uses vanilla JavaScript with event listeners attached to DOM elements, creating a lightweight and fast application without any external libraries or frameworks.
