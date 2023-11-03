import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddImageButton from './buttons/AddImageButton';
import AddFileButton from './buttons/AddFileButton';
import AddTextButton from './buttons/AddTextButton';

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
            <AddImageButton stackId={id}/>
            <AddFileButton stackId={id}/>
            <AddTextButton stackId={id}/>
        </ButtonGroup>
    )
}
