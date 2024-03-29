import type { IconButtonProps, IconProps } from "@design-system/widgets";

export interface IconButtonComponentProps {
  tooltip?: string;
  visuallyDisabled?: boolean;
  isLoading: boolean;
  iconName?: IconProps["name"];
  isDisabled?: boolean;
  variant?: IconButtonProps["variant"];
  color?: IconButtonProps["color"];
  onPress?: IconButtonProps["onPress"];
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
}
