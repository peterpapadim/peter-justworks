type link = {
  label: string;
  href: string;
};

export interface NavProps {
  logo: {
    label: string;
  };
  links: link[];
}
