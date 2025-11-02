import { Grow, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ open, onClose }) => (
  <Grow in={open} timeout={300}>
    <IconButton onClick={onClose}>
      <CloseIcon color="primary" />
    </IconButton>
  </Grow>
);

export default CloseButton;
