import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Publicar from "../../pages/Publicar";
import { Provider } from "react-redux";
import store from "../../redux/store";

afterEach(() => {
  cleanup();
});

test("navega para o segundo passo de publicar com sucesso?", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Publicar />
      </MemoryRouter>
    </Provider>
  );

  const nextButton = screen.getByText("Próximo");
  userEvent.click(nextButton);

});

test("atualiza a descrição com sucesso", () => {
  render(
<Provider store={store}>
      <MemoryRouter>
        <Publicar />
      </MemoryRouter>
    </Provider>
  );

  const descriptionInput = screen.getByTestId("description-input");
  userEvent.type(descriptionInput, "Test Description");

  expect(descriptionInput.value).toBe("Test Description");
});

test("verifica se o botão 'Próximo' está disabled inicialmente", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Publicar />
      </MemoryRouter>
    </Provider>
  );

  const nextButton = screen.getByText("Próximo");
  expect(nextButton).toBeDisabled();
});

test("snapshot da página Publicar", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Publicar />
      </MemoryRouter>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});