import useLocalStorage from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useContext } from "react";

type Link = { link: string; platform: string; id: string };
type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
};

type Data = {
  links: Link[];
  addNewLink: ({ link, platform }: Link) => void;
  profile: Profile;
  updateProfile: ({ email, firstName, lastName }: Profile) => void;
  updateOrder: (newOrder: Link[]) => void;
  deleteLink: (id: string) => void;
};
const Context = createContext<Data | null>(null)!;

const Provider = ({ children }: { children: ReactNode }) => {
  const [links, setLinks] = useLocalStorage<Link[]>("links", []);
  const [profile, setProfile] = useLocalStorage<Profile>("profile", {
    email: "fedi@fedi.com",
    firstName: "Fedi",
    lastName: "Rouatbi",
    imageUrl: "",
  });

  const updateProfile = ({ email, firstName, lastName, imageUrl }: Profile) => {
    setProfile({ email, firstName, lastName, imageUrl });
  };

  const addNewLink = ({ link, platform }: Link) => {
    setLinks([...links, { link, platform, id: crypto.randomUUID() }]);
  };
  const deleteLink = (id: string) => {
    const newItems = links.filter((link) => link.id !== id);
    setLinks(newItems);
  };
  const updateOrder = (newOrder: Link[]) => {
    setLinks(newOrder);
  };
  const values = {
    links,
    addNewLink,
    deleteLink,
    profile,
    updateProfile,
    updateOrder,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Provider;

export const useRbk = () => useContext(Context) as Data;
