import "./styles/TopPanel.css";
import Logo from "./TopPanel/Logo";
import ListingsButton from "./Buttons/ListingsButton";
import SettingsButton from "./Buttons/SettingsButton";

const TopPanel = () => {
  return (
    <div class="TopPanel">
      <Logo />
      <ListingsButton />
      <SettingsButton />
    </div>
  );
};

export default TopPanel;
