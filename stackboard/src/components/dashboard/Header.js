import styles from '@/css/dashboard.module.css'
import ButtonGroupHeader from './ButtonGroup';
import { Box, Modal } from '@mui/material';
import EditStackModal from '../modals/EditStackModal';
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

export default function Header({stack}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleCopy(){
        navigator.clipboard.writeText("#"+stack.id);
    }

    return (
        <div className={styles.headerContainer}>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={boxStyle}>
                <EditStackModal 
                    stackId={stack.id}
                    initName={stack.name} 
                    initColor={stack.color} 
                    handleClose={handleClose}/>
            </Box>
            </Modal>

            <h2>{stack.name}</h2>
            <div onClick={handleCopy} className={`${styles.idContainer} ${styles.pointer}`}>{"#"+stack.id}</div>
            <img  
                onClick={handleOpen}
                className={styles.pointer}
                 width="30" height="30" 
                 src="https://img.icons8.com/pastel-glyph/35/create-new--v2.png" 
                 alt="create-new--v2"
            />

            <div className={styles.space}></div>

            <ButtonGroupHeader id={stack.id}/>
            
        </div>
    )
}
