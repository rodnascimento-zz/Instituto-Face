import React from "react";
import { useFormik } from "formik";

export default function Add() {
  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema -colocar icone-</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        {error && <div className="user-login__error">{error}</div>}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
        <UIButton
          type="submit"
          theme="contained-blue"
          className="user-login__submit-button"
          rounded
        >
          Cadastro
        </UIButton>
      </form>
    </div>
  );
}
