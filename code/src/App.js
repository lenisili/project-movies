import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MoviesList } from "pages/MoviesList";
import { MoviesDetails } from "pages/MoviesDetails";


export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MoviesList />
        </Route>
        <Route path="/movie/:movieId">
          <MoviesDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
