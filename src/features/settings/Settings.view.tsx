import React from "react";
import { Flex, Box, Text, Heading } from "rebass";

type SettingsProps = {};

const languages = ["English", "Spanish", "Shouty English"];
const themes = ["Default", "Dark", "G2i"];

export const Settings: React.FC<SettingsProps> = () => (
  <Flex>
    <label>
      Show Animations
      <input type="checkbox" />
    </label>
    <label>
      <select>
        {languages.map(language => (
          <option value={language}>{language}</option>
        ))}
      </select>{" "}
      Language
    </label>
    <label>
      <select>
        {themes.map(theme => (
          <option value={theme}>{theme}</option>
        ))}
      </select>{" "}
      Theme
    </label>
  </Flex>
);
