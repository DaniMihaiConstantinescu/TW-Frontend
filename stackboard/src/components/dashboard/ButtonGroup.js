import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ButtonGroupHeader({id}) {
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

    return (
        <ButtonGroup aria-label="button group">
            <Button sx={buttonStyles}>
                <img width="17" height="17" src="https://img.icons8.com/material-outlined/24/plus-math--v1.png" alt="plus-math--v1"/>
                Add Image
            </Button>
            <Button sx={buttonStyles}>
                <img width="17" height="17" src="https://img.icons8.com/material-outlined/24/plus-math--v1.png" alt="plus-math--v1"/>
                Add File
            </Button>
            <Button sx={buttonStyles}>
                <img width="17" height="17" src="https://img.icons8.com/material-outlined/24/plus-math--v1.png" alt="plus-math--v1"/>
                Add Text
            </Button>
        </ButtonGroup>
    )
}
