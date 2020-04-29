import React from 'react';
import './editor-container.scss';
import { QuestionList } from './question-list';

export function EditorContainer() {
  return (
    <div className="editor-container">
      <div className="panel">
        <QuestionList />
      </div>
      <div className="panel">
        <div className="editor">
          Editor
          <textarea cols={20}></textarea>
        </div>
      </div>
    </div>
  );
}
