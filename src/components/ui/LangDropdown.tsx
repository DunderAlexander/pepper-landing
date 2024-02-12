import * as Select from "@radix-ui/react-select";
import GlobeIcon from "/public/globe.svg";
import styled from "styled-components";

const SelectContent = styled(Select.Content)`
  z-index: 10000;
  background-color: black;
  border: 2px solid white;
  border-radius: 6px;
`;

const SelectViewport = styled(Select.Viewport)``;

const SelectItem = styled(Select.Item)`
  padding-block: 0.62rem;
  padding-inline: 1rem;
  min-width: 8rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 2px solid white;
  }
  &[data-disabled] {
    color: gray;
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: rgba(233, 233, 233, 0.3);
  }
`;

export const LangDropdown = ({ handleChange }) => {
  return (
    <Select.Root onValueChange={handleChange}>
      <Select.Trigger>
        <Select.Icon>
          <GlobeIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <SelectContent position="popper" sideOffset={6}>
          <SelectViewport>
            <SelectItem value="en">
              <Select.ItemText>English</Select.ItemText>
            </SelectItem>
            <SelectItem value="ru">
              <Select.ItemText>Russian</Select.ItemText>
            </SelectItem>
            <SelectItem value="ua">
              <Select.ItemText>Ukrainian</Select.ItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  );
};
