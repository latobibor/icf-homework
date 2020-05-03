import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import './new-game-page.scss';

import { DispatchAction, Actions, StartGameAction } from '../../redux/root-reducer';
import { GlobalState } from '../../redux/global-state';

const nameInputId = 'player';

type Inputs = {
  [nameInputId]: string;
};

export function NewGamePage() {
  const {
    register,
    handleSubmit,
    formState: { isValid: formIsValid },
  } = useForm<Inputs>({ mode: 'onChange' });

  const isThereAnyQuestion = useSelector<GlobalState, boolean>(({ questions }) => questions.length > 0);
  const dispatch = useDispatch<DispatchAction<StartGameAction>>();

  function onSubmit(data: Inputs) {
    const player = data.player;

    dispatch({
      type: Actions.StartGame,
      player,
    });
  }

  const shouldStartGameBeActive = isThereAnyQuestion && formIsValid;

  return (
    <div className="empty-page-container">
      <div>
        <h1>Please add your name</h1>
        <h2>and press "Start Game"</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-controls">
            <label htmlFor={nameInputId}>Your name</label>
            <span className="tip">At least 2 characters</span>
            <input
              id={nameInputId}
              name={nameInputId}
              type="text"
              required
              className="form-control"
              ref={register({ required: true, minLength: 2 })}
              data-testid={nameInputId}
            />
            <button className="btn btn-lg btn-primary" type="submit" disabled={!shouldStartGameBeActive} data-testid={'start-game-button'}>
              Start Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
