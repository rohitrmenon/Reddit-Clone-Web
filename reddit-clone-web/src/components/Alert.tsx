import {
  Button,
  Snackbar,
  SnackbarAction,
  SnackbarProvider,
} from "@/ui";
interface AlertProps {
    description: string;
    open: boolean;
    setOpen: (open: boolean) => void; 
  }
export default function Alert({ description, open ,setOpen}: AlertProps) {
  return (
    <SnackbarProvider>
      <Snackbar
        description={description}
        open={open}
        onOpenChange={() => setOpen(false)}
      >
        <SnackbarAction asChild altText="button">
          <Button variant="ghost">Close</Button>
        </SnackbarAction>
      </Snackbar>
    </SnackbarProvider>
  );
}
