import { observer } from 'mobx-react';
import { FC, useContext } from 'react';
import { StoreContext } from '../../App';
import { ScreenContainer } from "./HeatMapScreen.styles"
import { Button } from "../../styles/generic.styles"

const center = {
  lat: 50.0647, // Latitude for Krakow
  lng: 19.9450  // Longitude for Krakow
};

export const HeatMapScreen: FC = observer(() => {
  const store = useContext(StoreContext);


  return (
    <ScreenContainer>
      <iframe src="https://www.google.com/maps/d/embed?mid=1gS1A5QY8mnpQ9m_2VLhER03aDnfZZfU&ehbc=2E312F"></iframe>
    </ScreenContainer>
  );
});
