import React from "react";

type SettingsProps = {};

const languages = ["English", "Spanish", "Shouty English"];
const themes = ["Default", "Dark", "G2i"];

export const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <div>
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
    </div>
  );
};
