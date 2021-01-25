import { useState } from "react";
import styled from "styled-components";

const EQUIPMENT = [
  {
    name: "pull-up bar",
    image: "pullupbar.svg",
  },
];

export default function EquipmentPage() {
  return (
    <StyledEquipmentPage>
      {EQUIPMENT.map((item) => (
        <Equipment key={item.name} item={item} />
      ))}
    </StyledEquipmentPage>
  );
}

const StyledEquipmentPage = styled.div`
  height: 100%;
  width: 100%;
`;

function Equipment({ item }) {
  const [selected, setSelected] = useState(false);

  return (
    <StyledEquipment
      style={
        selected
          ? { backgroundImage: `url(${item.image})`, backgroundColor: "green" }
          : { backgroundImage: `url(${item.image})` }
      }
      onClick={() => setSelected((prev) => !prev)}
    />
  );
}

const StyledEquipment = styled.div`
  position: relative;
  height: 100px;
  width: 200px;
  border: 2px solid;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  &:hover {
    ::after {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      content: "";
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
