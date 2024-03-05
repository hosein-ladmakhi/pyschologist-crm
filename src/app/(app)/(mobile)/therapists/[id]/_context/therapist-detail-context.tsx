import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface ITherapistDetailContext {
  openReserveDialog: boolean;

  handleOpenReserveDialog: () => void;
  handleCloseReserveDialog: () => void;
}

const therapistDetailContext = createContext<ITherapistDetailContext>({
  handleCloseReserveDialog: () => {},
  handleOpenReserveDialog: () => {},
  openReserveDialog: false,
});

export const useTherapistDetailContext = () =>
  useContext(therapistDetailContext);

const Provider = therapistDetailContext.Provider;

export const TherapistDetailContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [openReserveDialog, setOpenReserveDialog] = useState<boolean>(false);

  const handleOpenReserveDialog = () => {
    setOpenReserveDialog(true);
  };

  const handleCloseReserveDialog = () => {
    setOpenReserveDialog(false);
  };

  return (
    <Provider
      value={{
        handleCloseReserveDialog,
        handleOpenReserveDialog,
        openReserveDialog,
      }}
    >
      {children}
    </Provider>
  );
};
