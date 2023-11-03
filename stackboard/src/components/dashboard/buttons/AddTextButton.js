import AddFileModal from '@/components/modals/AddFileModal';
import AddImageModal from '@/components/modals/AddImageModal';
import AddTextModal from '@/components/modals/AddTextModal';
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react'

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    bgcolor: 'background.paper',
    borderRadius: 1,
    p: 3,
  };

const buttonStyles = {
    backgroundColor: '#E6E6E6',
    borderColor: '#A5A5A5',
    color: '#000000',
    display: 'flex',
    justifyContent: 'center',
    gap: 0.5,
    '&:hover': {
        backgroundColor: '#cccccc',
        borderColor: '#A5A5A5',
      },
  };

export default function AddTextButton({stackId}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return (
        <Button onClick={handleOpen} sx={buttonStyles}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <AddTextModal stackId={stackId} handleClose={handleClose}/>
                </Box>
            </Modal>

            <img width="17" height="17" src="https://img.icons8.com/material-outlined/24/plus-math--v1.png" alt="plus-math--v1"/>
            Add Text
        </Button>
    )
}
