import React, { useState } from 'react';
import { tasks, organizations, links } from '../data/data.js';

export default function TasksOrganizationsTable() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(null);

  // Якщо вибрано задачу — підсвічуємо організації
  const highlightedOrgs = selectedTask
    ? links.find(link => link.task === selectedTask)?.organizations || []
    : [];

  // Якщо вибрана організація — підсвічуємо функції
  const highlightedTasks = selectedOrg
    ? links
        .filter(link => link.organizations.includes(selectedOrg))
        .map(link => link.task)
    : [];

  return (
    <div
      style={{
        display: 'flex',
        gap: '30px',
        border: '1.5px solid #ccc',
        borderRadius: '6px',
        padding: '16px 24px',
        width: '100%',
        boxSizing: 'border-box',
        minWidth: '600px',
      }}
    >
      {/* Колонка задач */}
      <div
        style={{
          flex: 1,
          borderRight: '1.5px solid #ccc',
          paddingRight: '16px',
        }}
      >
        <h2
          style={{
            borderBottom: '1.5px solid #ccc',
            paddingBottom: '8px',
            marginBottom: '14px',
            userSelect: 'none',
          }}
        >
          ФУНКЦІЇ
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => {
            const isSelected = task === selectedTask;
            const isHighlighted = highlightedTasks.includes(task);
            return (
              <li
                key={task}
                onClick={() => {
                  setSelectedTask(isSelected ? null : task);
                  setSelectedOrg(null); // Скидаємо вибрану організацію
                }}
                style={{
                  cursor: 'pointer',
                  padding: '8px 14px',
                  marginBottom: '6px',
                  borderRadius: '4px',
                  backgroundColor: isSelected || isHighlighted ? '#a0d8f7' : 'transparent',
                  color: isSelected || isHighlighted ? 'black' : 'inherit',
                  transition: 'background-color 0.3s, color 0.3s',
                  userSelect: 'none',
                }}
              >
                {task}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Колонка організацій */}
      <div style={{ flex: 1, paddingLeft: '24px' }}>
        <h2
          style={{
            borderBottom: '1.5px solid #ccc',
            paddingBottom: '8px',
            marginBottom: '14px',
            whiteSpace: 'pre-line',
            userSelect: 'none',
          }}
        >
          МІНІСТЕРСТВА,
          {'\n'}
          відомства, установи
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {organizations.map(org => {
            const isSelected = org === selectedOrg;
            const isHighlighted = highlightedOrgs.includes(org);
            return (
              <li
                key={org}
                onClick={() => {
                  setSelectedOrg(isSelected ? null : org);
                  setSelectedTask(null); // Скидаємо вибрану функцію
                }}
                style={{
                  cursor: 'pointer',
                  padding: '8px 14px',
                  marginBottom: '6px',
                  borderRadius: '4px',
                  backgroundColor: isSelected || isHighlighted ? '#f7d68a' : 'transparent',
                  color: isSelected || isHighlighted ? 'black' : 'inherit',
                  transition: 'background-color 0.3s, color 0.3s',
                  userSelect: 'none',
                }}
              >
                {org}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
