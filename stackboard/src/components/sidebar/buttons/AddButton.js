import styles from '@/css/sidebar.module.css'
import AddStackModal from '@/components/modals/AddStackModal';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25%',
  bgcolor: 'background.paper',
  borderRadius: 1,
  p: 2,
};

export default function AddButton() {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <button onClick={handleOpen} className={styles.addBtn} role="button">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={boxStyle}>
            <AddStackModal handleClose={handleClose}/>
          </Box>
        </Modal>

        <div className={styles.centeredContent}>
            <img width="30" height="30" src="https://img.icons8.com/android/24/FFFFFF/plus.png" alt="plus"/>
            <span>Add Stack</span>
        </div>
    </button>
  )
}
