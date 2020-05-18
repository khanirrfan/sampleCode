import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import HomeBoxContainer from '../home/homeBoxContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        // width: 400,
        margin: '2% 5%'
    },
    inputSearch: {
        width: '96%'
    },
    rootAlert: {
        width: '96%',
        margin: '2% 2%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchInput() {
    const classes = useStyles();

    return (
        <div>
            <Paper component="form" className={ classes.root }>
                <IconButton className={ classes.iconButton } aria-label="menu">

                </IconButton>
                {/*  <InputBase
                    className={ classes.input }
                    placeholder="API/Pipeline/Asset"
                    inputProps={ { 'aria-label': 'API/Pipeline/Asset' } }
                />*/}
                <Autocomplete className={ classes.inputSearch }
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={ top100Films.map((option) => option.title) }
                    renderInput={ (params) => (
                        <TextField
                            { ...params }
                            margin="normal"
                            // variant="outlined"
                            placeholder="API/Pipeline/Asset"
                            InputProps={ { ...params.InputProps, type: 'API/Pipeline/Asset' } }
                        />
                    ) }
                />
                <IconButton type="submit" className={ classes.iconButton } aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            <div className={ classes.rootAlert }>
                <Alert severity="info">HANA host patching in progress from midnight to till tomorrow noon</Alert>
            </div>
            <Router>
                <HomeBoxContainer />
            </Router>

        </div>
    );
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 }]