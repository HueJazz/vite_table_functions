import React, { useState } from 'react';
import { tasks, organizations, links } from '../data/data.js';

export default function TasksOrganizationsTable() {
  const [selectedTask, setSelectedTask] = useState(null);

  const highlightedOrgs = selectedTask
    ? links.find(link => link.task === selectedTask)?.organizations || []
    : [];

  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '20px 30px',
        width: '100%',       // Занять всю ширину контейнера-родителя
        boxSizing: 'border-box',
        minWidth: '600px',   // чтобы не сильно сжималась на узких экранах
      }}
    >
      {/* Колонка задач */}
      <div style={{ flex: 1, borderRight: '2px solid #ccc' }}>
        <h2
          style={{
            borderBottom: '2px solid #ccc',
            paddingBottom: '10px',
            marginBottom: '16px',
            userSelect: 'none',
          }}
        >
          ФУНКЦІЇ
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li
              key={task}
              onClick={() => setSelectedTask(task === selectedTask ? null : task)}
              style={{
                cursor: 'pointer',
                padding: '8px 14px',
                marginBottom: '6px',
                borderRadius: '4px',
                backgroundColor: task === selectedTask ? '#a0d8f7' : 'transparent',
                color: task === selectedTask ? 'black' : 'inherit',
                transition: 'background-color 0.3s, color 0.3s',
                userSelect: 'none',
              }}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>

      {/* Колонка организаций */}
      <div style={{ flex: 1, paddingLeft: '30px' }}>
        <h2
          style={{
            borderBottom: '2px solid #ccc',
            paddingBottom: '10px',
            marginBottom: '16px',
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
            const isHighlighted = highlightedOrgs.includes(org);
            return (
              <li
                key={org}
                style={{
                  padding: '8px 14px',
                  marginBottom: '6px',
                  borderRadius: '4px',
                  backgroundColor: isHighlighted ? '#f7d68a' : 'transparent',
                  color: isHighlighted ? 'black' : 'inherit',
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
