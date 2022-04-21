import React from "react";
import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import SongCard from "./SongCard";
import data from "../../Data/StaticDataSong";

describe('Song track card sucessfully rendered', () => {
    
    test("render song card elements", () => {
        render(<SongCard data={data[0]} />);
    
        const imageTrack = screen.getByRole("img");
        const titleText = screen.getByText("Bohemian Rhapsody (The Original Soundtrack)");
        const artistsText = screen.getByText("Queen");
    
        expect(imageTrack).toHaveAttribute(
          "src",
          "https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b",
        );
        expect(imageTrack).toHaveAttribute(
          "alt",
          "Bohemian Rhapsody (The Original Soundtrack)"
        );
        expect(titleText).toBeInTheDocument();
        expect(artistsText).toBeInTheDocument();
      });

      test("button select become deselect if click", () => {
        render(
          <SongCard
            data={data[0]}
            handleSelect={(uri) => {
              console.log(uri);
            }}
            isSelected={true}
          />
        );
    
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Deselect");
      });

      test("button deselect become select if click", () => {
        render(
          <SongCard
            data={data[0]}
            handleSelect={(uri) => {
              console.log(uri);
            }}
            isSelected={false}
          />
        );
    
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Select");
      });
})