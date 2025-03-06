export interface CurrencyCardProps {
  currency: string;
  shares: number;
  allocation: string;
  availableCurrencyKeys: string[];
  index: number;
}

export interface DropdownProps {
  onChange: (event: Event) => void;
  id: string;
}

export interface AddCardProps {
  onClick: () => void;
}

export interface CurrencyDropdownProps extends DropdownProps {
  selectedOption: string;
  options: string[];
}

export interface AllocationDropdownProps extends DropdownProps {
  selectedOption: string;
  options: string[];
}
