import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './new-game-page.scss';

import { DispatchAction, NewGameAction, Actions } from '../../redux/root-reducer';
import { GlobalState } from '../../redux/global-state';

const nameInput = 'player';

type Inputs = {
  [nameInput]: string;
};

export function NewGamePage() {
  const {
    register,
    handleSubmit,
    formState: { isValid: formIsValid },
  } = useForm<Inputs>({ mode: 'onChange' });

  const isThereAnyQuestion = useSelector<GlobalState, boolean>(({ questions }) => questions.length > 0);
  const dispatch = useDispatch<DispatchAction<NewGameAction>>();

  function onSubmit(data: Inputs) {
    const player = data.player;

    dispatch({
      type: Actions.NewGame,
      player,
    });
  }

  const shouldNewGameBeActive = isThereAnyQuestion && formIsValid;

  return (
    <div className="empty-page-container">
      <div>
        <h1>Please add your name</h1>
        <h2>and press "Start Game"</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-controls">
            <label htmlFor={nameInput}>Your name</label>
            <span className="tip">At least 2 characters</span>
            <input
              id={nameInput}
              name={nameInput}
              type="text"
              required
              className="form-control"
              ref={register({ required: true, minLength: 2 })}
            />
            <Link to="/game" className={shouldNewGameBeActive ? '' : 'disabled-click'}>
              <button className="btn btn-lg btn-primary" type="submit" disabled={!shouldNewGameBeActive}>
                Start Game
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
