import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchButton from "./SearchButton";

describe('Song track card sucessfully rendered', () => {
    test('renders LoginForm component', () => {
        render(<SearchButton/>)
        
        expect(screen.getAllByPlaceholderText(/Search/)).toBeInTheDocument();
    });
})