import React from 'react';
import './editor-container.scss';
import { QuestionList } from './question-list';
import { Editor } from './editor';

export function EditorContainer() {
  return (
    <div className="editor-container">
      <div className="panel">
        <QuestionList />
      </div>
      <div className="panel">
        <Editor />
      </div>
    </div>
  );
}
